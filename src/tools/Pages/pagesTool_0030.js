/**
 * Generated Tool: pagesTool_0030
 * Domain: Pages
 * ID: 0030
 */
exports.pagesTool_0030 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0030:', error);
    throw error;
  }
};
