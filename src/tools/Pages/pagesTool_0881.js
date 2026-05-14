/**
 * Generated Tool: pagesTool_0881
 * Domain: Pages
 * ID: 0881
 */
exports.pagesTool_0881 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0881:', error);
    throw error;
  }
};
