/**
 * Generated Tool: pagesTool_0066
 * Domain: Pages
 * ID: 0066
 */
exports.pagesTool_0066 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0066:', error);
    throw error;
  }
};
