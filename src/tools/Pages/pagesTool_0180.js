/**
 * Generated Tool: pagesTool_0180
 * Domain: Pages
 * ID: 0180
 */
exports.pagesTool_0180 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0180:', error);
    throw error;
  }
};
