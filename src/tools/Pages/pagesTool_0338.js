/**
 * Generated Tool: pagesTool_0338
 * Domain: Pages
 * ID: 0338
 */
exports.pagesTool_0338 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0338:', error);
    throw error;
  }
};
