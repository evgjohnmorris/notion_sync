/**
 * Generated Tool: pagesTool_0176
 * Domain: Pages
 * ID: 0176
 */
exports.pagesTool_0176 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0176:', error);
    throw error;
  }
};
