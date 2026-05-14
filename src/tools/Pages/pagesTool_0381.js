/**
 * Generated Tool: pagesTool_0381
 * Domain: Pages
 * ID: 0381
 */
exports.pagesTool_0381 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0381:', error);
    throw error;
  }
};
