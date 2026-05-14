/**
 * Generated Tool: pagesTool_0941
 * Domain: Pages
 * ID: 0941
 */
exports.pagesTool_0941 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0941:', error);
    throw error;
  }
};
