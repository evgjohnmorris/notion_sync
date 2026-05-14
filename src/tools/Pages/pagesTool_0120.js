/**
 * Generated Tool: pagesTool_0120
 * Domain: Pages
 * ID: 0120
 */
exports.pagesTool_0120 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0120:', error);
    throw error;
  }
};
