/**
 * Generated Tool: pagesTool_0352
 * Domain: Pages
 * ID: 0352
 */
exports.pagesTool_0352 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0352:', error);
    throw error;
  }
};
