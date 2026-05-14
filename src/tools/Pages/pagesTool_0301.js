/**
 * Generated Tool: pagesTool_0301
 * Domain: Pages
 * ID: 0301
 */
exports.pagesTool_0301 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0301:', error);
    throw error;
  }
};
