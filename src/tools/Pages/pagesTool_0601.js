/**
 * Generated Tool: pagesTool_0601
 * Domain: Pages
 * ID: 0601
 */
exports.pagesTool_0601 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0601:', error);
    throw error;
  }
};
