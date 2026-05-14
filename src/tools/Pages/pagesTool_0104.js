/**
 * Generated Tool: pagesTool_0104
 * Domain: Pages
 * ID: 0104
 */
exports.pagesTool_0104 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0104:', error);
    throw error;
  }
};
