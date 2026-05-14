/**
 * Generated Tool: pagesTool_0472
 * Domain: Pages
 * ID: 0472
 */
exports.pagesTool_0472 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0472:', error);
    throw error;
  }
};
