/**
 * Generated Tool: pagesTool_0246
 * Domain: Pages
 * ID: 0246
 */
exports.pagesTool_0246 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0246:', error);
    throw error;
  }
};
