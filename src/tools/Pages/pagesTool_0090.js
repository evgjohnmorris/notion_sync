/**
 * Generated Tool: pagesTool_0090
 * Domain: Pages
 * ID: 0090
 */
exports.pagesTool_0090 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0090:', error);
    throw error;
  }
};
