/**
 * Generated Tool: pagesTool_0362
 * Domain: Pages
 * ID: 0362
 */
exports.pagesTool_0362 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0362:', error);
    throw error;
  }
};
