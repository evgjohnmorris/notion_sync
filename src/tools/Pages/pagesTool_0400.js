/**
 * Generated Tool: pagesTool_0400
 * Domain: Pages
 * ID: 0400
 */
exports.pagesTool_0400 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0400:', error);
    throw error;
  }
};
