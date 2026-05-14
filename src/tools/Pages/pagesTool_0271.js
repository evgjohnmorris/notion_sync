/**
 * Generated Tool: pagesTool_0271
 * Domain: Pages
 * ID: 0271
 */
exports.pagesTool_0271 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0271:', error);
    throw error;
  }
};
