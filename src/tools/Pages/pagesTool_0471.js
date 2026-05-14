/**
 * Generated Tool: pagesTool_0471
 * Domain: Pages
 * ID: 0471
 */
exports.pagesTool_0471 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0471:', error);
    throw error;
  }
};
