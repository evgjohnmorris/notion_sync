/**
 * Generated Tool: pagesTool_0860
 * Domain: Pages
 * ID: 0860
 */
exports.pagesTool_0860 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0860:', error);
    throw error;
  }
};
