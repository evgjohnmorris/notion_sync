/**
 * Generated Tool: pagesTool_0072
 * Domain: Pages
 * ID: 0072
 */
exports.pagesTool_0072 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0072:', error);
    throw error;
  }
};
