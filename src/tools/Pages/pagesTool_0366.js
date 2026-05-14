/**
 * Generated Tool: pagesTool_0366
 * Domain: Pages
 * ID: 0366
 */
exports.pagesTool_0366 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0366:', error);
    throw error;
  }
};
