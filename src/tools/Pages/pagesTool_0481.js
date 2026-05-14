/**
 * Generated Tool: pagesTool_0481
 * Domain: Pages
 * ID: 0481
 */
exports.pagesTool_0481 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0481:', error);
    throw error;
  }
};
