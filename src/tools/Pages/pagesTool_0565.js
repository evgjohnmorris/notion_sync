/**
 * Generated Tool: pagesTool_0565
 * Domain: Pages
 * ID: 0565
 */
exports.pagesTool_0565 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0565:', error);
    throw error;
  }
};
