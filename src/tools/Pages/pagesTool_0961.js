/**
 * Generated Tool: pagesTool_0961
 * Domain: Pages
 * ID: 0961
 */
exports.pagesTool_0961 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0961:', error);
    throw error;
  }
};
