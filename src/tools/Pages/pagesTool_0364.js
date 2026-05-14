/**
 * Generated Tool: pagesTool_0364
 * Domain: Pages
 * ID: 0364
 */
exports.pagesTool_0364 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0364:', error);
    throw error;
  }
};
