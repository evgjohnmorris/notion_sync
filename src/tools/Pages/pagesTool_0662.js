/**
 * Generated Tool: pagesTool_0662
 * Domain: Pages
 * ID: 0662
 */
exports.pagesTool_0662 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0662:', error);
    throw error;
  }
};
