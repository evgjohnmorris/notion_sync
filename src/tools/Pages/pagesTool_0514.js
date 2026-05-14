/**
 * Generated Tool: pagesTool_0514
 * Domain: Pages
 * ID: 0514
 */
exports.pagesTool_0514 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0514:', error);
    throw error;
  }
};
