/**
 * Generated Tool: pagesTool_0327
 * Domain: Pages
 * ID: 0327
 */
exports.pagesTool_0327 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0327:', error);
    throw error;
  }
};
