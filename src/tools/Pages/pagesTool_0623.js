/**
 * Generated Tool: pagesTool_0623
 * Domain: Pages
 * ID: 0623
 */
exports.pagesTool_0623 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0623:', error);
    throw error;
  }
};
