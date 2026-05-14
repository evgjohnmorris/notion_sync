/**
 * Generated Tool: pagesTool_0295
 * Domain: Pages
 * ID: 0295
 */
exports.pagesTool_0295 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0295:', error);
    throw error;
  }
};
