/**
 * Generated Tool: pagesTool_0313
 * Domain: Pages
 * ID: 0313
 */
exports.pagesTool_0313 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0313:', error);
    throw error;
  }
};
