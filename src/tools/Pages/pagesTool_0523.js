/**
 * Generated Tool: pagesTool_0523
 * Domain: Pages
 * ID: 0523
 */
exports.pagesTool_0523 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0523:', error);
    throw error;
  }
};
