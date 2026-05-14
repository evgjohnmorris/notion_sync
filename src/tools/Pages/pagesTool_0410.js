/**
 * Generated Tool: pagesTool_0410
 * Domain: Pages
 * ID: 0410
 */
exports.pagesTool_0410 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0410:', error);
    throw error;
  }
};
