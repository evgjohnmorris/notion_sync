/**
 * Generated Tool: pagesTool_0865
 * Domain: Pages
 * ID: 0865
 */
exports.pagesTool_0865 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0865:', error);
    throw error;
  }
};
