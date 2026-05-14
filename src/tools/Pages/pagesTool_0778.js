/**
 * Generated Tool: pagesTool_0778
 * Domain: Pages
 * ID: 0778
 */
exports.pagesTool_0778 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0778:', error);
    throw error;
  }
};
