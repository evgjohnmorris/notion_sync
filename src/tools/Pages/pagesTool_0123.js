/**
 * Generated Tool: pagesTool_0123
 * Domain: Pages
 * ID: 0123
 */
exports.pagesTool_0123 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0123:', error);
    throw error;
  }
};
