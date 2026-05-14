/**
 * Generated Tool: pagesTool_0258
 * Domain: Pages
 * ID: 0258
 */
exports.pagesTool_0258 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0258:', error);
    throw error;
  }
};
