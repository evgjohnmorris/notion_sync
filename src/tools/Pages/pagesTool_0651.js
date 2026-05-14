/**
 * Generated Tool: pagesTool_0651
 * Domain: Pages
 * ID: 0651
 */
exports.pagesTool_0651 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0651:', error);
    throw error;
  }
};
