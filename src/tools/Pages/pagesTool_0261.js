/**
 * Generated Tool: pagesTool_0261
 * Domain: Pages
 * ID: 0261
 */
exports.pagesTool_0261 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0261:', error);
    throw error;
  }
};
