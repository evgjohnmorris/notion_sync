/**
 * Generated Tool: pagesTool_0105
 * Domain: Pages
 * ID: 0105
 */
exports.pagesTool_0105 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0105:', error);
    throw error;
  }
};
