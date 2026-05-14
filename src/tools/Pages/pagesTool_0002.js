/**
 * Generated Tool: pagesTool_0002
 * Domain: Pages
 * ID: 0002
 */
exports.pagesTool_0002 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0002:', error);
    throw error;
  }
};
