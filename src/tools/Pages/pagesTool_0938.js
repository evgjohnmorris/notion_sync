/**
 * Generated Tool: pagesTool_0938
 * Domain: Pages
 * ID: 0938
 */
exports.pagesTool_0938 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0938:', error);
    throw error;
  }
};
