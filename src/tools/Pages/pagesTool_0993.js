/**
 * Generated Tool: pagesTool_0993
 * Domain: Pages
 * ID: 0993
 */
exports.pagesTool_0993 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0993:', error);
    throw error;
  }
};
