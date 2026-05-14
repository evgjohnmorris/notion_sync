/**
 * Generated Tool: pagesTool_0080
 * Domain: Pages
 * ID: 0080
 */
exports.pagesTool_0080 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0080:', error);
    throw error;
  }
};
