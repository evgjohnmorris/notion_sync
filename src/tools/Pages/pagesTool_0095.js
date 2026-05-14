/**
 * Generated Tool: pagesTool_0095
 * Domain: Pages
 * ID: 0095
 */
exports.pagesTool_0095 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0095:', error);
    throw error;
  }
};
