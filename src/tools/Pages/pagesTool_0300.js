/**
 * Generated Tool: pagesTool_0300
 * Domain: Pages
 * ID: 0300
 */
exports.pagesTool_0300 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0300:', error);
    throw error;
  }
};
