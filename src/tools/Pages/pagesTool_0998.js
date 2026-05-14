/**
 * Generated Tool: pagesTool_0998
 * Domain: Pages
 * ID: 0998
 */
exports.pagesTool_0998 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0998:', error);
    throw error;
  }
};
