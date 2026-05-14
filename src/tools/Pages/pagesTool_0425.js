/**
 * Generated Tool: pagesTool_0425
 * Domain: Pages
 * ID: 0425
 */
exports.pagesTool_0425 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0425:', error);
    throw error;
  }
};
