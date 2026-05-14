/**
 * Generated Tool: pagesTool_0237
 * Domain: Pages
 * ID: 0237
 */
exports.pagesTool_0237 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0237:', error);
    throw error;
  }
};
