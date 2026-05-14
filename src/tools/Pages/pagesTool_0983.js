/**
 * Generated Tool: pagesTool_0983
 * Domain: Pages
 * ID: 0983
 */
exports.pagesTool_0983 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0983:', error);
    throw error;
  }
};
