/**
 * Generated Tool: pagesTool_0336
 * Domain: Pages
 * ID: 0336
 */
exports.pagesTool_0336 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0336:', error);
    throw error;
  }
};
