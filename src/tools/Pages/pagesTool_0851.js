/**
 * Generated Tool: pagesTool_0851
 * Domain: Pages
 * ID: 0851
 */
exports.pagesTool_0851 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0851:', error);
    throw error;
  }
};
