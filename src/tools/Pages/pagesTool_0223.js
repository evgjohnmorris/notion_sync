/**
 * Generated Tool: pagesTool_0223
 * Domain: Pages
 * ID: 0223
 */
exports.pagesTool_0223 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0223:', error);
    throw error;
  }
};
