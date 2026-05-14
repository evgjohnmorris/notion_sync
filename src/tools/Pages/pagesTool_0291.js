/**
 * Generated Tool: pagesTool_0291
 * Domain: Pages
 * ID: 0291
 */
exports.pagesTool_0291 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0291:', error);
    throw error;
  }
};
