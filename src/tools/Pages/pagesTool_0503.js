/**
 * Generated Tool: pagesTool_0503
 * Domain: Pages
 * ID: 0503
 */
exports.pagesTool_0503 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0503:', error);
    throw error;
  }
};
