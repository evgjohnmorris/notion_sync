/**
 * Generated Tool: pagesTool_0008
 * Domain: Pages
 * ID: 0008
 */
exports.pagesTool_0008 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0008:', error);
    throw error;
  }
};
