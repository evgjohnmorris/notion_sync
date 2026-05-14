/**
 * Generated Tool: pagesTool_0228
 * Domain: Pages
 * ID: 0228
 */
exports.pagesTool_0228 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0228:', error);
    throw error;
  }
};
