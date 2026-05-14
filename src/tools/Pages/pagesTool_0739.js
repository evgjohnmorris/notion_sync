/**
 * Generated Tool: pagesTool_0739
 * Domain: Pages
 * ID: 0739
 */
exports.pagesTool_0739 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0739:', error);
    throw error;
  }
};
