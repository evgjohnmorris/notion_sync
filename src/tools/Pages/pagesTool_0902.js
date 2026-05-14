/**
 * Generated Tool: pagesTool_0902
 * Domain: Pages
 * ID: 0902
 */
exports.pagesTool_0902 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0902:', error);
    throw error;
  }
};
