/**
 * Generated Tool: pagesTool_0137
 * Domain: Pages
 * ID: 0137
 */
exports.pagesTool_0137 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0137:', error);
    throw error;
  }
};
