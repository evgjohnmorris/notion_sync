/**
 * Generated Tool: pagesTool_0204
 * Domain: Pages
 * ID: 0204
 */
exports.pagesTool_0204 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0204:', error);
    throw error;
  }
};
