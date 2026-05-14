/**
 * Generated Tool: pagesTool_0367
 * Domain: Pages
 * ID: 0367
 */
exports.pagesTool_0367 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0367:', error);
    throw error;
  }
};
