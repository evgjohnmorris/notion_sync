/**
 * Generated Tool: pagesTool_0051
 * Domain: Pages
 * ID: 0051
 */
exports.pagesTool_0051 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0051:', error);
    throw error;
  }
};
