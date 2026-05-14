/**
 * Generated Tool: pagesTool_0087
 * Domain: Pages
 * ID: 0087
 */
exports.pagesTool_0087 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0087:', error);
    throw error;
  }
};
