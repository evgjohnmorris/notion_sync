/**
 * Generated Tool: pagesTool_0286
 * Domain: Pages
 * ID: 0286
 */
exports.pagesTool_0286 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0286:', error);
    throw error;
  }
};
