/**
 * Generated Tool: pagesTool_0663
 * Domain: Pages
 * ID: 0663
 */
exports.pagesTool_0663 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0663:', error);
    throw error;
  }
};
