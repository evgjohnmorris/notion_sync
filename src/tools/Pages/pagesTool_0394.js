/**
 * Generated Tool: pagesTool_0394
 * Domain: Pages
 * ID: 0394
 */
exports.pagesTool_0394 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0394:', error);
    throw error;
  }
};
