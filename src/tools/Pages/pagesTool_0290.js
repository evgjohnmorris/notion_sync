/**
 * Generated Tool: pagesTool_0290
 * Domain: Pages
 * ID: 0290
 */
exports.pagesTool_0290 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0290:', error);
    throw error;
  }
};
