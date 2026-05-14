/**
 * Generated Tool: pagesTool_0296
 * Domain: Pages
 * ID: 0296
 */
exports.pagesTool_0296 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0296:', error);
    throw error;
  }
};
