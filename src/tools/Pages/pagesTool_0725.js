/**
 * Generated Tool: pagesTool_0725
 * Domain: Pages
 * ID: 0725
 */
exports.pagesTool_0725 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0725:', error);
    throw error;
  }
};
