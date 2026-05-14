/**
 * Generated Tool: pagesTool_0157
 * Domain: Pages
 * ID: 0157
 */
exports.pagesTool_0157 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0157:', error);
    throw error;
  }
};
