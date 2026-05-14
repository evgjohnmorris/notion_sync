/**
 * Generated Tool: pagesTool_0339
 * Domain: Pages
 * ID: 0339
 */
exports.pagesTool_0339 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0339:', error);
    throw error;
  }
};
