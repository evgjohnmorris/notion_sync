/**
 * Generated Tool: pagesTool_0595
 * Domain: Pages
 * ID: 0595
 */
exports.pagesTool_0595 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0595:', error);
    throw error;
  }
};
