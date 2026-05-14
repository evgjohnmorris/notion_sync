/**
 * Generated Tool: pagesTool_0399
 * Domain: Pages
 * ID: 0399
 */
exports.pagesTool_0399 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0399:', error);
    throw error;
  }
};
