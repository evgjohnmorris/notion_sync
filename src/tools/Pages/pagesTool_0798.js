/**
 * Generated Tool: pagesTool_0798
 * Domain: Pages
 * ID: 0798
 */
exports.pagesTool_0798 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0798:', error);
    throw error;
  }
};
