/**
 * Generated Tool: pagesTool_0194
 * Domain: Pages
 * ID: 0194
 */
exports.pagesTool_0194 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0194:', error);
    throw error;
  }
};
