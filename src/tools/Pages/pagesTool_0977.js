/**
 * Generated Tool: pagesTool_0977
 * Domain: Pages
 * ID: 0977
 */
exports.pagesTool_0977 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0977:', error);
    throw error;
  }
};
