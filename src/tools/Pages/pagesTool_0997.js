/**
 * Generated Tool: pagesTool_0997
 * Domain: Pages
 * ID: 0997
 */
exports.pagesTool_0997 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0997:', error);
    throw error;
  }
};
