/**
 * Generated Tool: pagesTool_0892
 * Domain: Pages
 * ID: 0892
 */
exports.pagesTool_0892 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0892:', error);
    throw error;
  }
};
