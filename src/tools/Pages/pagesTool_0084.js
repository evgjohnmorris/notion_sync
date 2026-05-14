/**
 * Generated Tool: pagesTool_0084
 * Domain: Pages
 * ID: 0084
 */
exports.pagesTool_0084 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0084:', error);
    throw error;
  }
};
