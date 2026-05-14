/**
 * Generated Tool: pagesTool_0593
 * Domain: Pages
 * ID: 0593
 */
exports.pagesTool_0593 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0593:', error);
    throw error;
  }
};
