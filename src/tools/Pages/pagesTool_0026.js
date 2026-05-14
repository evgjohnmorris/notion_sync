/**
 * Generated Tool: pagesTool_0026
 * Domain: Pages
 * ID: 0026
 */
exports.pagesTool_0026 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0026:', error);
    throw error;
  }
};
