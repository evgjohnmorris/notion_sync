/**
 * Generated Tool: pagesTool_0343
 * Domain: Pages
 * ID: 0343
 */
exports.pagesTool_0343 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0343:', error);
    throw error;
  }
};
