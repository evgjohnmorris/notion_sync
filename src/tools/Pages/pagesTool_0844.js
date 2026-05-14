/**
 * Generated Tool: pagesTool_0844
 * Domain: Pages
 * ID: 0844
 */
exports.pagesTool_0844 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0844:', error);
    throw error;
  }
};
