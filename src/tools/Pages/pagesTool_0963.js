/**
 * Generated Tool: pagesTool_0963
 * Domain: Pages
 * ID: 0963
 */
exports.pagesTool_0963 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0963:', error);
    throw error;
  }
};
