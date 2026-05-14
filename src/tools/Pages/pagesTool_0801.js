/**
 * Generated Tool: pagesTool_0801
 * Domain: Pages
 * ID: 0801
 */
exports.pagesTool_0801 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0801:', error);
    throw error;
  }
};
