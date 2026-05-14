/**
 * Generated Tool: pagesTool_0790
 * Domain: Pages
 * ID: 0790
 */
exports.pagesTool_0790 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0790:', error);
    throw error;
  }
};
