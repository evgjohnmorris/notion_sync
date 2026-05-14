/**
 * Generated Tool: pagesTool_0946
 * Domain: Pages
 * ID: 0946
 */
exports.pagesTool_0946 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0946:', error);
    throw error;
  }
};
