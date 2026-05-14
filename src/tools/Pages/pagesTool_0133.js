/**
 * Generated Tool: pagesTool_0133
 * Domain: Pages
 * ID: 0133
 */
exports.pagesTool_0133 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0133:', error);
    throw error;
  }
};
