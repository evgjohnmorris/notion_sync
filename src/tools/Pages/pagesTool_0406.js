/**
 * Generated Tool: pagesTool_0406
 * Domain: Pages
 * ID: 0406
 */
exports.pagesTool_0406 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0406:', error);
    throw error;
  }
};
