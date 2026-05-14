/**
 * Generated Tool: pagesTool_0298
 * Domain: Pages
 * ID: 0298
 */
exports.pagesTool_0298 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0298:', error);
    throw error;
  }
};
