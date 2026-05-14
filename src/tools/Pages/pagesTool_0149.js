/**
 * Generated Tool: pagesTool_0149
 * Domain: Pages
 * ID: 0149
 */
exports.pagesTool_0149 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0149:', error);
    throw error;
  }
};
