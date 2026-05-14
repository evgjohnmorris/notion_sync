/**
 * Generated Tool: pagesTool_0614
 * Domain: Pages
 * ID: 0614
 */
exports.pagesTool_0614 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0614:', error);
    throw error;
  }
};
