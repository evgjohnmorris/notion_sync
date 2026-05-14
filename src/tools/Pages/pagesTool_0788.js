/**
 * Generated Tool: pagesTool_0788
 * Domain: Pages
 * ID: 0788
 */
exports.pagesTool_0788 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0788:', error);
    throw error;
  }
};
