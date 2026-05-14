/**
 * Generated Tool: pagesTool_0106
 * Domain: Pages
 * ID: 0106
 */
exports.pagesTool_0106 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0106:', error);
    throw error;
  }
};
