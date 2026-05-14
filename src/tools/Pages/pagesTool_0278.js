/**
 * Generated Tool: pagesTool_0278
 * Domain: Pages
 * ID: 0278
 */
exports.pagesTool_0278 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0278:', error);
    throw error;
  }
};
