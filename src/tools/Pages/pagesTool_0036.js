/**
 * Generated Tool: pagesTool_0036
 * Domain: Pages
 * ID: 0036
 */
exports.pagesTool_0036 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0036:', error);
    throw error;
  }
};
