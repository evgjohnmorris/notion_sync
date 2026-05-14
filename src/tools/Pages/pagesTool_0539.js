/**
 * Generated Tool: pagesTool_0539
 * Domain: Pages
 * ID: 0539
 */
exports.pagesTool_0539 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0539:', error);
    throw error;
  }
};
