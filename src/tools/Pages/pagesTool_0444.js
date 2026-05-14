/**
 * Generated Tool: pagesTool_0444
 * Domain: Pages
 * ID: 0444
 */
exports.pagesTool_0444 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0444:', error);
    throw error;
  }
};
