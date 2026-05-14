/**
 * Generated Tool: pagesTool_0127
 * Domain: Pages
 * ID: 0127
 */
exports.pagesTool_0127 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0127:', error);
    throw error;
  }
};
