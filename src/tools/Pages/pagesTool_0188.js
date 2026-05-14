/**
 * Generated Tool: pagesTool_0188
 * Domain: Pages
 * ID: 0188
 */
exports.pagesTool_0188 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0188:', error);
    throw error;
  }
};
