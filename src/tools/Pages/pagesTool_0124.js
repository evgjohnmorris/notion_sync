/**
 * Generated Tool: pagesTool_0124
 * Domain: Pages
 * ID: 0124
 */
exports.pagesTool_0124 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0124:', error);
    throw error;
  }
};
