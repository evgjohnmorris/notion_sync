/**
 * Generated Tool: pagesTool_0037
 * Domain: Pages
 * ID: 0037
 */
exports.pagesTool_0037 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0037:', error);
    throw error;
  }
};
