/**
 * Generated Tool: pagesTool_0896
 * Domain: Pages
 * ID: 0896
 */
exports.pagesTool_0896 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0896:', error);
    throw error;
  }
};
