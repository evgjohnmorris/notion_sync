const { Client } = require('@notionhq/client');

class NotionSyncClient {
    constructor(auth) {
        this.client = new Client({ auth });
        this.maxRetries = 3;
        this.baseDelayMs = 1000;
        
        // Expose the underlying domains we commonly use
        this.pages = this._wrapMethods(this.client.pages, ['create', 'update', 'retrieve']);
        this.databases = this._wrapMethods(this.client.databases, ['query', 'retrieve']);
        this.blocks = {
            children: this._wrapMethods(this.client.blocks.children, ['append']),
            ...this._wrapMethods(this.client.blocks, ['retrieve', 'update', 'delete'])
        };
        this.search = this._wrapWithRetry(this.client.search.bind(this.client));
    }

    _wrapMethods(apiGroup, methods) {
        const wrapped = {};
        for (const method of methods) {
            if (apiGroup[method]) {
                wrapped[method] = this._wrapWithRetry(apiGroup[method].bind(apiGroup));
            }
        }
        return wrapped;
    }

    _wrapWithRetry(fn) {
        return async (...args) => {
            let attempt = 0;
            while (attempt < this.maxRetries) {
                try {
                    return await fn(...args);
                } catch (error) {
                    // 429 Too Many Requests
                    if (error.status === 429) {
                        attempt++;
                        if (attempt >= this.maxRetries) {
                            throw new Error(`Max retries reached. Notion API rate limit exceeded.`);
                        }
                        // Use Notion's recommended Retry-After header if available, otherwise exponential backoff
                        let retryAfter = error.headers && error.headers.get('retry-after');
                        let delayMs = retryAfter ? parseInt(retryAfter) * 1000 : this.baseDelayMs * Math.pow(2, attempt);
                        console.warn(`[NotionSyncClient] Rate limited. Retrying in ${delayMs}ms (Attempt ${attempt}/${this.maxRetries})...`);
                        await this._sleep(delayMs);
                    } else {
                        throw error;
                    }
                }
            }
        };
    }

    _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

module.exports = NotionSyncClient;
