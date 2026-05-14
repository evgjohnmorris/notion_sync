/**
 * Generated Tool: pagesTool_0404
 * Domain: Pages
 * ID: 0404
 */
exports.pagesTool_0404 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0404:', error);
    throw error;
  }
};
