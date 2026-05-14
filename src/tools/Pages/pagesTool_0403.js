/**
 * Generated Tool: pagesTool_0403
 * Domain: Pages
 * ID: 0403
 */
exports.pagesTool_0403 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0403:', error);
    throw error;
  }
};
