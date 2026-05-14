/**
 * Generated Tool: pagesTool_0894
 * Domain: Pages
 * ID: 0894
 */
exports.pagesTool_0894 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0894:', error);
    throw error;
  }
};
