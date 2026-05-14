/**
 * Generated Tool: pagesTool_0928
 * Domain: Pages
 * ID: 0928
 */
exports.pagesTool_0928 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0928:', error);
    throw error;
  }
};
