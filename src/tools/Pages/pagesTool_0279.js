/**
 * Generated Tool: pagesTool_0279
 * Domain: Pages
 * ID: 0279
 */
exports.pagesTool_0279 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0279:', error);
    throw error;
  }
};
