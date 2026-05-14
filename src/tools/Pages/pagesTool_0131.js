/**
 * Generated Tool: pagesTool_0131
 * Domain: Pages
 * ID: 0131
 */
exports.pagesTool_0131 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0131:', error);
    throw error;
  }
};
