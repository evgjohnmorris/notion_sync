/**
 * Generated Tool: pagesTool_0877
 * Domain: Pages
 * ID: 0877
 */
exports.pagesTool_0877 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0877:', error);
    throw error;
  }
};
