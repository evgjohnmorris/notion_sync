/**
 * Generated Tool: pagesTool_0078
 * Domain: Pages
 * ID: 0078
 */
exports.pagesTool_0078 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0078:', error);
    throw error;
  }
};
