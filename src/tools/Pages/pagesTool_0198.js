/**
 * Generated Tool: pagesTool_0198
 * Domain: Pages
 * ID: 0198
 */
exports.pagesTool_0198 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0198:', error);
    throw error;
  }
};
