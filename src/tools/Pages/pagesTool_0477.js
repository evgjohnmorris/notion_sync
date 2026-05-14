/**
 * Generated Tool: pagesTool_0477
 * Domain: Pages
 * ID: 0477
 */
exports.pagesTool_0477 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0477:', error);
    throw error;
  }
};
