/**
 * Generated Tool: pagesTool_0909
 * Domain: Pages
 * ID: 0909
 */
exports.pagesTool_0909 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0909:', error);
    throw error;
  }
};
