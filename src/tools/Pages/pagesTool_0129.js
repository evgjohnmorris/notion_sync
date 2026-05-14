/**
 * Generated Tool: pagesTool_0129
 * Domain: Pages
 * ID: 0129
 */
exports.pagesTool_0129 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0129:', error);
    throw error;
  }
};
