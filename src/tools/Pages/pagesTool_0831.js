/**
 * Generated Tool: pagesTool_0831
 * Domain: Pages
 * ID: 0831
 */
exports.pagesTool_0831 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0831:', error);
    throw error;
  }
};
