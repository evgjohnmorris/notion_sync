/**
 * Generated Tool: pagesTool_0283
 * Domain: Pages
 * ID: 0283
 */
exports.pagesTool_0283 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0283:', error);
    throw error;
  }
};
