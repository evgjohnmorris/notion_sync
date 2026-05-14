/**
 * Generated Tool: pagesTool_0991
 * Domain: Pages
 * ID: 0991
 */
exports.pagesTool_0991 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0991:', error);
    throw error;
  }
};
