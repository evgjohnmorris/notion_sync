/**
 * Generated Tool: pagesTool_0132
 * Domain: Pages
 * ID: 0132
 */
exports.pagesTool_0132 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0132:', error);
    throw error;
  }
};
