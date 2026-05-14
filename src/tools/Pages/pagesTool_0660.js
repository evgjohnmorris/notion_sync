/**
 * Generated Tool: pagesTool_0660
 * Domain: Pages
 * ID: 0660
 */
exports.pagesTool_0660 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0660:', error);
    throw error;
  }
};
