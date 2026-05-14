/**
 * Generated Tool: pagesTool_0861
 * Domain: Pages
 * ID: 0861
 */
exports.pagesTool_0861 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0861:', error);
    throw error;
  }
};
