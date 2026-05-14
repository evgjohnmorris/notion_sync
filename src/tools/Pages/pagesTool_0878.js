/**
 * Generated Tool: pagesTool_0878
 * Domain: Pages
 * ID: 0878
 */
exports.pagesTool_0878 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0878:', error);
    throw error;
  }
};
