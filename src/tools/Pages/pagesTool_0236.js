/**
 * Generated Tool: pagesTool_0236
 * Domain: Pages
 * ID: 0236
 */
exports.pagesTool_0236 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0236:', error);
    throw error;
  }
};
