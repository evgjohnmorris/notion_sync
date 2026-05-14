/**
 * Generated Tool: pagesTool_0827
 * Domain: Pages
 * ID: 0827
 */
exports.pagesTool_0827 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0827:', error);
    throw error;
  }
};
