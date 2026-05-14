/**
 * Generated Tool: pagesTool_0213
 * Domain: Pages
 * ID: 0213
 */
exports.pagesTool_0213 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0213:', error);
    throw error;
  }
};
