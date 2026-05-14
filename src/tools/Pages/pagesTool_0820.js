/**
 * Generated Tool: pagesTool_0820
 * Domain: Pages
 * ID: 0820
 */
exports.pagesTool_0820 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0820:', error);
    throw error;
  }
};
