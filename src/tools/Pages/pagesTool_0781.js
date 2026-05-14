/**
 * Generated Tool: pagesTool_0781
 * Domain: Pages
 * ID: 0781
 */
exports.pagesTool_0781 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0781:', error);
    throw error;
  }
};
