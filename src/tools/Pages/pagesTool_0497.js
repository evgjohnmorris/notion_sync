/**
 * Generated Tool: pagesTool_0497
 * Domain: Pages
 * ID: 0497
 */
exports.pagesTool_0497 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0497:', error);
    throw error;
  }
};
