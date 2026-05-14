/**
 * Generated Tool: pagesTool_0117
 * Domain: Pages
 * ID: 0117
 */
exports.pagesTool_0117 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0117:', error);
    throw error;
  }
};
