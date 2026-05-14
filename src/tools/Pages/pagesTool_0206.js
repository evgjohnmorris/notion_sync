/**
 * Generated Tool: pagesTool_0206
 * Domain: Pages
 * ID: 0206
 */
exports.pagesTool_0206 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0206:', error);
    throw error;
  }
};
