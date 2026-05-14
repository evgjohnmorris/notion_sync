/**
 * Generated Tool: pagesTool_0463
 * Domain: Pages
 * ID: 0463
 */
exports.pagesTool_0463 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0463:', error);
    throw error;
  }
};
