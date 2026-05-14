/**
 * Generated Tool: pagesTool_0003
 * Domain: Pages
 * ID: 0003
 */
exports.pagesTool_0003 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0003:', error);
    throw error;
  }
};
