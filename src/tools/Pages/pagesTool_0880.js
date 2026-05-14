/**
 * Generated Tool: pagesTool_0880
 * Domain: Pages
 * ID: 0880
 */
exports.pagesTool_0880 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0880:', error);
    throw error;
  }
};
