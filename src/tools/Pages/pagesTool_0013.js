/**
 * Generated Tool: pagesTool_0013
 * Domain: Pages
 * ID: 0013
 */
exports.pagesTool_0013 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0013:', error);
    throw error;
  }
};
