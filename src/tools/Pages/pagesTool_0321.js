/**
 * Generated Tool: pagesTool_0321
 * Domain: Pages
 * ID: 0321
 */
exports.pagesTool_0321 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0321:', error);
    throw error;
  }
};
