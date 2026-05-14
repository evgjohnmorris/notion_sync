/**
 * Generated Tool: pagesTool_0361
 * Domain: Pages
 * ID: 0361
 */
exports.pagesTool_0361 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0361:', error);
    throw error;
  }
};
