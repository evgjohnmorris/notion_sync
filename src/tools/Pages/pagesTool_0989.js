/**
 * Generated Tool: pagesTool_0989
 * Domain: Pages
 * ID: 0989
 */
exports.pagesTool_0989 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0989:', error);
    throw error;
  }
};
