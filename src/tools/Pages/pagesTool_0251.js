/**
 * Generated Tool: pagesTool_0251
 * Domain: Pages
 * ID: 0251
 */
exports.pagesTool_0251 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0251:', error);
    throw error;
  }
};
