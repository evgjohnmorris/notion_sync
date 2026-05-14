/**
 * Generated Tool: pagesTool_0146
 * Domain: Pages
 * ID: 0146
 */
exports.pagesTool_0146 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0146:', error);
    throw error;
  }
};
