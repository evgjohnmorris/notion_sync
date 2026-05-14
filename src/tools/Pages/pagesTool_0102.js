/**
 * Generated Tool: pagesTool_0102
 * Domain: Pages
 * ID: 0102
 */
exports.pagesTool_0102 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0102:', error);
    throw error;
  }
};
