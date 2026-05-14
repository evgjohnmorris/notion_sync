/**
 * Generated Tool: pagesTool_0303
 * Domain: Pages
 * ID: 0303
 */
exports.pagesTool_0303 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0303:', error);
    throw error;
  }
};
