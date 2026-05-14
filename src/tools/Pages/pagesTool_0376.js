/**
 * Generated Tool: pagesTool_0376
 * Domain: Pages
 * ID: 0376
 */
exports.pagesTool_0376 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0376:', error);
    throw error;
  }
};
