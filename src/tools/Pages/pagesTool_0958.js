/**
 * Generated Tool: pagesTool_0958
 * Domain: Pages
 * ID: 0958
 */
exports.pagesTool_0958 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0958:', error);
    throw error;
  }
};
