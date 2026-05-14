/**
 * Generated Tool: pagesTool_0254
 * Domain: Pages
 * ID: 0254
 */
exports.pagesTool_0254 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0254:', error);
    throw error;
  }
};
