/**
 * Generated Tool: pagesTool_0389
 * Domain: Pages
 * ID: 0389
 */
exports.pagesTool_0389 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0389:', error);
    throw error;
  }
};
