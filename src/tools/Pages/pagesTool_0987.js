/**
 * Generated Tool: pagesTool_0987
 * Domain: Pages
 * ID: 0987
 */
exports.pagesTool_0987 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0987:', error);
    throw error;
  }
};
