/**
 * Generated Tool: pagesTool_0270
 * Domain: Pages
 * ID: 0270
 */
exports.pagesTool_0270 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0270:', error);
    throw error;
  }
};
