/**
 * Generated Tool: pagesTool_0974
 * Domain: Pages
 * ID: 0974
 */
exports.pagesTool_0974 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0974:', error);
    throw error;
  }
};
