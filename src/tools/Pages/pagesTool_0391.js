/**
 * Generated Tool: pagesTool_0391
 * Domain: Pages
 * ID: 0391
 */
exports.pagesTool_0391 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0391:', error);
    throw error;
  }
};
