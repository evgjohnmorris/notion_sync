/**
 * Generated Tool: pagesTool_0489
 * Domain: Pages
 * ID: 0489
 */
exports.pagesTool_0489 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0489:', error);
    throw error;
  }
};
