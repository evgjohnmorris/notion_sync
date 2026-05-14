/**
 * Generated Tool: pagesTool_0765
 * Domain: Pages
 * ID: 0765
 */
exports.pagesTool_0765 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0765:', error);
    throw error;
  }
};
