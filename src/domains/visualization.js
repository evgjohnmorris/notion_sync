/**
 * Visualization Domain
 * Generates external charts and returns Notion image blocks.
 */

async function generateChartBlock(chartType, labels, datasets, title) {
    // We use QuickChart (a popular open-source Chart.js rendering service)
    // because Notion supports embedding standard image URLs, but does not
    // support native custom charts or direct image uploads via API.
    
    const chartConfig = {
        type: chartType,
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            plugins: {
                title: {
                    display: !!title,
                    text: title || ''
                }
            }
        }
    };

    // Serialize to URL
    const encodedConfig = encodeURIComponent(JSON.stringify(chartConfig));
    const chartUrl = `https://quickchart.io/chart?c=${encodedConfig}&w=800&h=400&bkg=white`;

    // Return a valid Notion Image Block
    return {
        object: 'block',
        type: 'image',
        image: {
            type: 'external',
            external: {
                url: chartUrl
            }
        }
    };
}

module.exports = {
    generateChartBlock
};
