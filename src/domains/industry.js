const { handleIndustryMacro } = require('../ai-enhancements/industry-macros');

function createIndustryInterface(domain) {
    return {
        smartCreate: async (notionClient, params = {}) => {
            return handleIndustryMacro(notionClient, domain, 'smart_create', params);
        },
        smartUpdate: async (notionClient, params = {}) => {
            return handleIndustryMacro(notionClient, domain, 'smart_update', params);
        }
    };
}

module.exports = {
    logistics: createIndustryInterface('Logistics'),
    trade: createIndustryInterface('Trade'),
    import: createIndustryInterface('Import'),
    export: createIndustryInterface('Export'),
    brokerage: createIndustryInterface('Brokerage'),
    taxes: createIndustryInterface('Taxes'),
    isoStandards: createIndustryInterface('ISO_Standards')
};
