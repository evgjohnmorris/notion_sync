/**
 * Generated Tool: pagesTool_0652
 * Domain: Pages
 * ID: 0652
 */
exports.pagesTool_0652 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0652:', error);
    throw error;
  }
};
