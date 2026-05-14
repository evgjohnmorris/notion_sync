/**
 * Generated Tool: pagesTool_0377
 * Domain: Pages
 * ID: 0377
 */
exports.pagesTool_0377 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0377:', error);
    throw error;
  }
};
