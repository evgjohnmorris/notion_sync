/**
 * Generated Tool: pagesTool_0738
 * Domain: Pages
 * ID: 0738
 */
exports.pagesTool_0738 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0738:', error);
    throw error;
  }
};
