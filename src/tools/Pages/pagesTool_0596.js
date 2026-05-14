/**
 * Generated Tool: pagesTool_0596
 * Domain: Pages
 * ID: 0596
 */
exports.pagesTool_0596 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0596:', error);
    throw error;
  }
};
