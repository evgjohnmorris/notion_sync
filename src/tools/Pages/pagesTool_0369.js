/**
 * Generated Tool: pagesTool_0369
 * Domain: Pages
 * ID: 0369
 */
exports.pagesTool_0369 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0369:', error);
    throw error;
  }
};
