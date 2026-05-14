/**
 * Generated Tool: pagesTool_0345
 * Domain: Pages
 * ID: 0345
 */
exports.pagesTool_0345 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0345:', error);
    throw error;
  }
};
