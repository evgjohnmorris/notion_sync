/**
 * Generated Tool: pagesTool_0930
 * Domain: Pages
 * ID: 0930
 */
exports.pagesTool_0930 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0930:', error);
    throw error;
  }
};
