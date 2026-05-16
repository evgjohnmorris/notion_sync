import { LRUCache } from "lru-cache";

// We create a cache that stores Markdown strings for 60 seconds
export const edgeCache = new LRUCache<string, string>({
  max: 500, // Maximum number of items in the cache
  ttl: 1000 * 60, // 60 seconds TTL
});

export function getFromCache(key: string): string | undefined {
  return edgeCache.get(key);
}

export function setToCache(key: string, value: string): void {
  edgeCache.set(key, value);
}

export function invalidateCache(key: string): void {
  edgeCache.delete(key);
}
