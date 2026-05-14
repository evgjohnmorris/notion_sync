/**
 * Generated Tool: pagesTool_0422
 * Domain: Pages
 * ID: 0422
 */
exports.pagesTool_0422 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0422:', error);
    throw error;
  }
};
