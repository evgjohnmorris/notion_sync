/**
 * Generated Tool: pagesTool_0308
 * Domain: Pages
 * ID: 0308
 */
exports.pagesTool_0308 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0308:', error);
    throw error;
  }
};
