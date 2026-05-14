/**
 * Generated Tool: pagesTool_0764
 * Domain: Pages
 * ID: 0764
 */
exports.pagesTool_0764 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0764:', error);
    throw error;
  }
};
