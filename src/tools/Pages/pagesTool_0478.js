/**
 * Generated Tool: pagesTool_0478
 * Domain: Pages
 * ID: 0478
 */
exports.pagesTool_0478 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0478:', error);
    throw error;
  }
};
