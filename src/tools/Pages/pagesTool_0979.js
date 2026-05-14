/**
 * Generated Tool: pagesTool_0979
 * Domain: Pages
 * ID: 0979
 */
exports.pagesTool_0979 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0979:', error);
    throw error;
  }
};
