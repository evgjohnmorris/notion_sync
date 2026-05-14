/**
 * Generated Tool: pagesTool_0747
 * Domain: Pages
 * ID: 0747
 */
exports.pagesTool_0747 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0747:', error);
    throw error;
  }
};
