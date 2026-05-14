/**
 * Generated Tool: pagesTool_0289
 * Domain: Pages
 * ID: 0289
 */
exports.pagesTool_0289 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0289:', error);
    throw error;
  }
};
