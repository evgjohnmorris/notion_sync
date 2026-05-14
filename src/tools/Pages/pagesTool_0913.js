/**
 * Generated Tool: pagesTool_0913
 * Domain: Pages
 * ID: 0913
 */
exports.pagesTool_0913 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0913:', error);
    throw error;
  }
};
