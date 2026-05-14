/**
 * Generated Tool: pagesTool_0474
 * Domain: Pages
 * ID: 0474
 */
exports.pagesTool_0474 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0474:', error);
    throw error;
  }
};
