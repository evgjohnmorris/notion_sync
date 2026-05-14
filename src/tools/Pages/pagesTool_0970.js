/**
 * Generated Tool: pagesTool_0970
 * Domain: Pages
 * ID: 0970
 */
exports.pagesTool_0970 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0970:', error);
    throw error;
  }
};
