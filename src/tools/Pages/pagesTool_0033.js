/**
 * Generated Tool: pagesTool_0033
 * Domain: Pages
 * ID: 0033
 */
exports.pagesTool_0033 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0033:', error);
    throw error;
  }
};
