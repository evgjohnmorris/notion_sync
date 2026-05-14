/**
 * Generated Tool: pagesTool_0836
 * Domain: Pages
 * ID: 0836
 */
exports.pagesTool_0836 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0836:', error);
    throw error;
  }
};
