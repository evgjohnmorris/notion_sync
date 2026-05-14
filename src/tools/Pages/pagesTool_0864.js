/**
 * Generated Tool: pagesTool_0864
 * Domain: Pages
 * ID: 0864
 */
exports.pagesTool_0864 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0864:', error);
    throw error;
  }
};
