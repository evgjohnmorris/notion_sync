/**
 * Generated Tool: pagesTool_0627
 * Domain: Pages
 * ID: 0627
 */
exports.pagesTool_0627 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0627:', error);
    throw error;
  }
};
