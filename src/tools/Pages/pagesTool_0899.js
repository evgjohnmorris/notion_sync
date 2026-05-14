/**
 * Generated Tool: pagesTool_0899
 * Domain: Pages
 * ID: 0899
 */
exports.pagesTool_0899 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0899:', error);
    throw error;
  }
};
