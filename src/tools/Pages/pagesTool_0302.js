/**
 * Generated Tool: pagesTool_0302
 * Domain: Pages
 * ID: 0302
 */
exports.pagesTool_0302 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0302:', error);
    throw error;
  }
};
