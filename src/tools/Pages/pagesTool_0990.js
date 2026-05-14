/**
 * Generated Tool: pagesTool_0990
 * Domain: Pages
 * ID: 0990
 */
exports.pagesTool_0990 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0990:', error);
    throw error;
  }
};
