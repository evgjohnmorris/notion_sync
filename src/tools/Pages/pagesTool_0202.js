/**
 * Generated Tool: pagesTool_0202
 * Domain: Pages
 * ID: 0202
 */
exports.pagesTool_0202 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0202:', error);
    throw error;
  }
};
