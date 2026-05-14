/**
 * Generated Tool: pagesTool_0128
 * Domain: Pages
 * ID: 0128
 */
exports.pagesTool_0128 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0128:', error);
    throw error;
  }
};
