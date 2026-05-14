/**
 * Generated Tool: pagesTool_0897
 * Domain: Pages
 * ID: 0897
 */
exports.pagesTool_0897 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0897:', error);
    throw error;
  }
};
