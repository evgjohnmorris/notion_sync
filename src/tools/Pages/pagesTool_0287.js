/**
 * Generated Tool: pagesTool_0287
 * Domain: Pages
 * ID: 0287
 */
exports.pagesTool_0287 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0287:', error);
    throw error;
  }
};
