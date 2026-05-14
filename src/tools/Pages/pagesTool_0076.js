/**
 * Generated Tool: pagesTool_0076
 * Domain: Pages
 * ID: 0076
 */
exports.pagesTool_0076 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0076:', error);
    throw error;
  }
};
