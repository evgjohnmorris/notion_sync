/**
 * Generated Tool: pagesTool_0158
 * Domain: Pages
 * ID: 0158
 */
exports.pagesTool_0158 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0158:', error);
    throw error;
  }
};
