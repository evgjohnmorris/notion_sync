/**
 * Generated Tool: pagesTool_0101
 * Domain: Pages
 * ID: 0101
 */
exports.pagesTool_0101 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0101:', error);
    throw error;
  }
};
