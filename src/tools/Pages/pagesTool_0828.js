/**
 * Generated Tool: pagesTool_0828
 * Domain: Pages
 * ID: 0828
 */
exports.pagesTool_0828 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0828:', error);
    throw error;
  }
};
