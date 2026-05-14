/**
 * Generated Tool: pagesTool_0038
 * Domain: Pages
 * ID: 0038
 */
exports.pagesTool_0038 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0038:', error);
    throw error;
  }
};
