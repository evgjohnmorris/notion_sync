/**
 * Generated Tool: pagesTool_0789
 * Domain: Pages
 * ID: 0789
 */
exports.pagesTool_0789 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0789:', error);
    throw error;
  }
};
