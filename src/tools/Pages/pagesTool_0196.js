/**
 * Generated Tool: pagesTool_0196
 * Domain: Pages
 * ID: 0196
 */
exports.pagesTool_0196 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0196:', error);
    throw error;
  }
};
