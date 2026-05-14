/**
 * Generated Tool: pagesTool_0956
 * Domain: Pages
 * ID: 0956
 */
exports.pagesTool_0956 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0956:', error);
    throw error;
  }
};
