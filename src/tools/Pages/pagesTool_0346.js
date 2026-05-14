/**
 * Generated Tool: pagesTool_0346
 * Domain: Pages
 * ID: 0346
 */
exports.pagesTool_0346 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0346:', error);
    throw error;
  }
};
