/**
 * Generated Tool: pagesTool_0838
 * Domain: Pages
 * ID: 0838
 */
exports.pagesTool_0838 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0838:', error);
    throw error;
  }
};
