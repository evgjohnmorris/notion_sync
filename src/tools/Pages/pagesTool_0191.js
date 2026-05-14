/**
 * Generated Tool: pagesTool_0191
 * Domain: Pages
 * ID: 0191
 */
exports.pagesTool_0191 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0191:', error);
    throw error;
  }
};
