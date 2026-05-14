/**
 * Generated Tool: pagesTool_0231
 * Domain: Pages
 * ID: 0231
 */
exports.pagesTool_0231 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0231:', error);
    throw error;
  }
};
