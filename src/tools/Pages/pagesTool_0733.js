/**
 * Generated Tool: pagesTool_0733
 * Domain: Pages
 * ID: 0733
 */
exports.pagesTool_0733 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0733:', error);
    throw error;
  }
};
