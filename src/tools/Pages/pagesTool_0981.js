/**
 * Generated Tool: pagesTool_0981
 * Domain: Pages
 * ID: 0981
 */
exports.pagesTool_0981 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0981:', error);
    throw error;
  }
};
