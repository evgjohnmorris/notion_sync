/**
 * Generated Tool: pagesTool_0063
 * Domain: Pages
 * ID: 0063
 */
exports.pagesTool_0063 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0063:', error);
    throw error;
  }
};
