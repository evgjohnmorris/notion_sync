/**
 * Generated Tool: pagesTool_0088
 * Domain: Pages
 * ID: 0088
 */
exports.pagesTool_0088 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0088:', error);
    throw error;
  }
};
