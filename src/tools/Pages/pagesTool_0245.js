/**
 * Generated Tool: pagesTool_0245
 * Domain: Pages
 * ID: 0245
 */
exports.pagesTool_0245 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0245:', error);
    throw error;
  }
};
