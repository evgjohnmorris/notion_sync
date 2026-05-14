/**
 * Generated Tool: pagesTool_0780
 * Domain: Pages
 * ID: 0780
 */
exports.pagesTool_0780 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0780:', error);
    throw error;
  }
};
