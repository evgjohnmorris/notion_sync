/**
 * Generated Tool: pagesTool_0863
 * Domain: Pages
 * ID: 0863
 */
exports.pagesTool_0863 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0863:', error);
    throw error;
  }
};
