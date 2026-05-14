/**
 * Generated Tool: pagesTool_0264
 * Domain: Pages
 * ID: 0264
 */
exports.pagesTool_0264 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0264:', error);
    throw error;
  }
};
