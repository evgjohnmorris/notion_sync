/**
 * Generated Tool: pagesTool_0306
 * Domain: Pages
 * ID: 0306
 */
exports.pagesTool_0306 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0306:', error);
    throw error;
  }
};
