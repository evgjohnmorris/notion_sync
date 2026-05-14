/**
 * Generated Tool: pagesTool_0949
 * Domain: Pages
 * ID: 0949
 */
exports.pagesTool_0949 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0949:', error);
    throw error;
  }
};
