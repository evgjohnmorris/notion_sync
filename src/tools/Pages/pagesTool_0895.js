/**
 * Generated Tool: pagesTool_0895
 * Domain: Pages
 * ID: 0895
 */
exports.pagesTool_0895 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0895:', error);
    throw error;
  }
};
