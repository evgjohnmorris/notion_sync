/**
 * Generated Tool: pagesTool_0081
 * Domain: Pages
 * ID: 0081
 */
exports.pagesTool_0081 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0081:', error);
    throw error;
  }
};
