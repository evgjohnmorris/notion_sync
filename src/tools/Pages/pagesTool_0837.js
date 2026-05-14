/**
 * Generated Tool: pagesTool_0837
 * Domain: Pages
 * ID: 0837
 */
exports.pagesTool_0837 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0837:', error);
    throw error;
  }
};
