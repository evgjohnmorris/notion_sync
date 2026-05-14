/**
 * Generated Tool: pagesTool_0252
 * Domain: Pages
 * ID: 0252
 */
exports.pagesTool_0252 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0252:', error);
    throw error;
  }
};
