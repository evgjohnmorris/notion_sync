/**
 * Generated Tool: pagesTool_0145
 * Domain: Pages
 * ID: 0145
 */
exports.pagesTool_0145 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0145:', error);
    throw error;
  }
};
