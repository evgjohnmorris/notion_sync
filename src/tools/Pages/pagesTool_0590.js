/**
 * Generated Tool: pagesTool_0590
 * Domain: Pages
 * ID: 0590
 */
exports.pagesTool_0590 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0590:', error);
    throw error;
  }
};
