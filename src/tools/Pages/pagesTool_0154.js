/**
 * Generated Tool: pagesTool_0154
 * Domain: Pages
 * ID: 0154
 */
exports.pagesTool_0154 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0154:', error);
    throw error;
  }
};
