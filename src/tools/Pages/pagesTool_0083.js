/**
 * Generated Tool: pagesTool_0083
 * Domain: Pages
 * ID: 0083
 */
exports.pagesTool_0083 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0083:', error);
    throw error;
  }
};
