/**
 * Generated Tool: pagesTool_0170
 * Domain: Pages
 * ID: 0170
 */
exports.pagesTool_0170 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0170:', error);
    throw error;
  }
};
