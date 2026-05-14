/**
 * Generated Tool: pagesTool_0939
 * Domain: Pages
 * ID: 0939
 */
exports.pagesTool_0939 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0939:', error);
    throw error;
  }
};
