/**
 * Generated Tool: pagesTool_0476
 * Domain: Pages
 * ID: 0476
 */
exports.pagesTool_0476 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0476:', error);
    throw error;
  }
};
