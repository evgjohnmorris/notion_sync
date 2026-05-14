/**
 * Generated Tool: pagesTool_0598
 * Domain: Pages
 * ID: 0598
 */
exports.pagesTool_0598 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0598:', error);
    throw error;
  }
};
