/**
 * Generated Tool: pagesTool_0089
 * Domain: Pages
 * ID: 0089
 */
exports.pagesTool_0089 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0089:', error);
    throw error;
  }
};
