/**
 * Expert-Level Strategy Domain Tools
 */
const { parseMarkdownToBlocks } = require('../utils/parser');

function buildAdvancedProperties(title, companyName) {
    return {
        "Title": {
            title: [{ text: { content: `${title}: ${companyName}` } }]
        },
        "Analysis Date": {
            date: { start: new Date().toISOString().split('T')[0] }
        },
        "Status": {
            select: { name: "Draft Analysis", color: "yellow" }
        },
        "Confidence Score": {
            number: 85
        },
        "Tags": {
            multi_select: [
                { name: "Strategic Planning" },
                { name: companyName.replace(/[^a-zA-Z0-9]/g, '') }
            ]
        }
    };
}

async function fetchWikipediaSummary(topic) {
    try {
        const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`);
        if (!response.ok) return null;
        const data = await response.json();
        return data.extract || null;
    } catch (e) {
        console.warn(`Failed to fetch Wikipedia summary for ${topic}: ${e.message}`);
        return null;
    }
}


async function generateSWOT(notionClient, databaseId, companyName, params = {}, fileContent = null) {
    let summaryText = 'Executive Summary: Provide a high-level overview of the strategic position.';
    if (!fileContent) {
        const wikiSummary = await fetchWikipediaSummary(companyName);
        if (wikiSummary) {
            summaryText = `Executive Summary (Wikipedia): ${wikiSummary.substring(0, 500)}${wikiSummary.length > 500 ? '...' : ''}`;
        }
    }
    
    let children = fileContent ? parseMarkdownToBlocks(fileContent) : [
        {
            object: 'block',
            type: 'callout',
            callout: {
                rich_text: [{ type: 'text', text: { content: summaryText } }],
                icon: { type: 'emoji', emoji: '💡' },
                color: 'blue_background'
            }
        },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: 'Strengths (Internal)' } }] } },
        { object: 'block', type: 'toggle', toggle: { rich_text: [{ type: 'text', text: { content: 'Core Competencies & Advantages' } }], children: [{ object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: params.strengths || 'Proprietary technology or IP' } }] } }] } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: 'Weaknesses (Internal)' } }] } },
        { object: 'block', type: 'toggle', toggle: { rich_text: [{ type: 'text', text: { content: 'Vulnerabilities & Limitations' } }], children: [{ object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: params.weaknesses || 'Resource constraints' } }] } }] } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: 'Opportunities (External)' } }] } },
        { object: 'block', type: 'toggle', toggle: { rich_text: [{ type: 'text', text: { content: 'Market Growth & Innovations' } }], children: [{ object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: params.opportunities || 'Emerging market segments' } }] } }] } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: 'Threats (External)' } }] } },
        { object: 'block', type: 'toggle', toggle: { rich_text: [{ type: 'text', text: { content: 'Risks & Competitor Actions' } }], children: [{ object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: params.threats || 'Regulatory changes' } }] } }] } },
        { object: 'block', type: 'divider', divider: {} },
        { object: 'block', type: 'heading_3', heading_3: { rich_text: [{ type: 'text', text: { content: 'Actionable Next Steps' } }] } },
        { object: 'block', type: 'to_do', to_do: { rich_text: [{ type: 'text', text: { content: params.next_step || 'Review alignment with Q3 objectives' } }], checked: false } }
    ];
    
    const payload = {
        parent: { database_id: databaseId },
        properties: buildAdvancedProperties('SWOT Analysis', companyName),
        children
    };
    
    return await notionClient.pages.create(payload);
}

async function generatePESTEL(notionClient, databaseId, companyName, fileContent = null) {
    let summaryText = 'Macro-Environmental Framework: Evaluate external factors impacting the business.';
    if (!fileContent) {
        const wikiSummary = await fetchWikipediaSummary(companyName);
        if (wikiSummary) {
            summaryText = `Macro-Environmental Context (Wikipedia): ${wikiSummary.substring(0, 500)}${wikiSummary.length > 500 ? '...' : ''}`;
        }
    }

    let children = fileContent ? parseMarkdownToBlocks(fileContent) : [
        { object: 'block', type: 'callout', callout: { rich_text: [{ type: 'text', text: { content: summaryText } }], icon: { type: 'emoji', emoji: '🌍' }, color: 'green_background' } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: '🏛️ Political Factors' } }] } },
        { object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Government policy and stability' } }] } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: '📈 Economic Factors' } }] } },
        { object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Inflation rates and economic growth trends' } }] } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: '👥 Social Factors' } }] } },
        { object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Demographic shifts and consumer behavior' } }] } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: '💻 Technological Factors' } }] } },
        { object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Automation and R&D activity' } }] } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: '🌱 Environmental Factors' } }] } },
        { object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Sustainability mandates and carbon footprint' } }] } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: '⚖️ Legal Factors' } }] } },
        { object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Employment laws and industry regulations' } }] } },
        { object: 'block', type: 'divider', divider: {} },
        { object: 'block', type: 'heading_3', heading_3: { rich_text: [{ type: 'text', text: { content: 'Strategic Alignment' } }] } },
        { object: 'block', type: 'paragraph', paragraph: { rich_text: [{ type: 'text', text: { content: 'Integrate these macro factors into the core risk registry.' } }] } }
    ];

    const payload = {
        parent: { database_id: databaseId },
        properties: buildAdvancedProperties('PESTEL Analysis', companyName),
        children
    };

    return await notionClient.pages.create(payload);
}

async function generateOKR(notionClient, databaseId, objectiveName, ownerName, fileContent = null) {
    let children = fileContent ? parseMarkdownToBlocks(fileContent) : [
        { object: 'block', type: 'callout', callout: { rich_text: [{ type: 'text', text: { content: `Objective: ${objectiveName}` } }], icon: { type: 'emoji', emoji: '🎯' }, color: 'blue_background' } },
        { object: 'block', type: 'paragraph', paragraph: { rich_text: [{ type: 'text', text: { content: `Owner: @${ownerName} | Cycle: Current Quarter` } }] } },
        { object: 'block', type: 'divider', divider: {} },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: 'Key Results' } }] } },
        { object: 'block', type: 'to_do', to_do: { rich_text: [{ type: 'text', text: { content: 'KR1: Increase core metric from X to Y' } }], checked: false } },
        { object: 'block', type: 'to_do', to_do: { rich_text: [{ type: 'text', text: { content: 'KR2: Achieve 100% compliance in critical area' } }], checked: false } },
        { object: 'block', type: 'to_do', to_do: { rich_text: [{ type: 'text', text: { content: 'KR3: Launch major new feature/initiative' } }], checked: false } },
        { object: 'block', type: 'divider', divider: {} },
        { object: 'block', type: 'heading_3', heading_3: { rich_text: [{ type: 'text', text: { content: 'Strategic Initiatives (Tasks)' } }] } },
        { object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Initiative 1 related to KR1' } }] } }
    ];

    const payload = {
        parent: { database_id: databaseId },
        properties: buildAdvancedProperties('OKR Alignment', objectiveName),
        children
    };
    return await notionClient.pages.create(payload);
}

async function generateLeanCanvas(notionClient, databaseId, productName, fileContent = null) {
    let children = fileContent ? parseMarkdownToBlocks(fileContent) : [
        { object: 'block', type: 'callout', callout: { rich_text: [{ type: 'text', text: { content: 'Lean Canvas: 1-Page Business Model for rapid iteration.' } }], icon: { type: 'emoji', emoji: '🚀' }, color: 'purple_background' } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: '1. Problem' } }] } },
        { object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Top 3 problems' } }] } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: '2. Customer Segments' } }] } },
        { object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Target customers & early adopters' } }] } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: '3. Unique Value Proposition' } }] } },
        { object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Single, clear, compelling message' } }] } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: '4. Solution' } }] } },
        { object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Top 3 features' } }] } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: '5. Channels' } }] } },
        { object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Path to customers' } }] } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: '6. Revenue Streams' } }] } },
        { object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Revenue model, lifetime value, etc.' } }] } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: '7. Cost Structure' } }] } },
        { object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Customer acquisition costs, hosting, etc.' } }] } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: '8. Key Metrics' } }] } },
        { object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Key activities you measure' } }] } },
        { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ type: 'text', text: { content: '9. Unfair Advantage' } }] } },
        { object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Can\'t be easily copied or bought' } }] } }
    ];

    const payload = {
        parent: { database_id: databaseId },
        properties: buildAdvancedProperties('Lean Canvas', productName),
        children
    };
    return await notionClient.pages.create(payload);
}

async function generatePorterFiveForces(notionClient, databaseId, marketName, fileContent = null) {
    let children = fileContent ? parseMarkdownToBlocks(fileContent) : [
        { object: 'block', type: 'callout', callout: { rich_text: [{ type: 'text', text: { content: `Industry Analysis: ${marketName}` } }], icon: { type: 'emoji', emoji: '📊' }, color: 'gray_background' } },
        { object: 'block', type: 'toggle', toggle: { rich_text: [{ type: 'text', text: { content: '⚔️ Competitive Rivalry [Assess Risk Level]' } }], children: [{ object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Number of competitors, market growth rate' } }] } }] } },
        { object: 'block', type: 'toggle', toggle: { rich_text: [{ type: 'text', text: { content: '🛡️ Threat of New Entrants [Assess Risk Level]' } }], children: [{ object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Barriers to entry, economies of scale' } }] } }] } },
        { object: 'block', type: 'toggle', toggle: { rich_text: [{ type: 'text', text: { content: '🤝 Bargaining Power of Suppliers [Assess Risk Level]' } }], children: [{ object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Number of suppliers, uniqueness of service' } }] } }] } },
        { object: 'block', type: 'toggle', toggle: { rich_text: [{ type: 'text', text: { content: '🛍️ Bargaining Power of Buyers [Assess Risk Level]' } }], children: [{ object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Number of customers, price sensitivity' } }] } }] } },
        { object: 'block', type: 'toggle', toggle: { rich_text: [{ type: 'text', text: { content: '🔄 Threat of Substitutes [Assess Risk Level]' } }], children: [{ object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: [{ type: 'text', text: { content: 'Substitute performance, switching costs' } }] } }] } }
    ];

    const payload = {
        parent: { database_id: databaseId },
        properties: buildAdvancedProperties("Porter's Five Forces", marketName),
        children
    };
    return await notionClient.pages.create(payload);
}

module.exports = {
    generateSWOT,
    generatePESTEL,
    generateOKR,
    generateLeanCanvas,
    generatePorterFiveForces
};
