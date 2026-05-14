/**
 * Generated Tool: pagesTool_0093
 * Domain: Pages
 * ID: 0093
 */
exports.pagesTool_0093 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0093:', error);
    throw error;
  }
};
