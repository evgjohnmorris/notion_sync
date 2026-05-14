/**
 * Generated Tool: pagesTool_0192
 * Domain: Pages
 * ID: 0192
 */
exports.pagesTool_0192 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0192:', error);
    throw error;
  }
};
