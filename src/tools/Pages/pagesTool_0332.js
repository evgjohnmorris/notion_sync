/**
 * Generated Tool: pagesTool_0332
 * Domain: Pages
 * ID: 0332
 */
exports.pagesTool_0332 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0332:', error);
    throw error;
  }
};
