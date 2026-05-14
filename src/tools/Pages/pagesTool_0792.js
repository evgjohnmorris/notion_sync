/**
 * Generated Tool: pagesTool_0792
 * Domain: Pages
 * ID: 0792
 */
exports.pagesTool_0792 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0792:', error);
    throw error;
  }
};
