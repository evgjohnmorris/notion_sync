/**
 * Generated Tool: pagesTool_0460
 * Domain: Pages
 * ID: 0460
 */
exports.pagesTool_0460 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0460:', error);
    throw error;
  }
};
