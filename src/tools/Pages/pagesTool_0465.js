/**
 * Generated Tool: pagesTool_0465
 * Domain: Pages
 * ID: 0465
 */
exports.pagesTool_0465 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0465:', error);
    throw error;
  }
};
