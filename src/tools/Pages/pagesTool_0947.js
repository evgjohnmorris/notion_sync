/**
 * Generated Tool: pagesTool_0947
 * Domain: Pages
 * ID: 0947
 */
exports.pagesTool_0947 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0947:', error);
    throw error;
  }
};
