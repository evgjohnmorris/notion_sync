/**
 * Generated Tool: pagesTool_0800
 * Domain: Pages
 * ID: 0800
 */
exports.pagesTool_0800 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0800:', error);
    throw error;
  }
};
