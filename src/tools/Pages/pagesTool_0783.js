/**
 * Generated Tool: pagesTool_0783
 * Domain: Pages
 * ID: 0783
 */
exports.pagesTool_0783 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0783:', error);
    throw error;
  }
};
