/**
 * Generated Tool: pagesTool_0227
 * Domain: Pages
 * ID: 0227
 */
exports.pagesTool_0227 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0227:', error);
    throw error;
  }
};
