/**
 * Generated Tool: pagesTool_0509
 * Domain: Pages
 * ID: 0509
 */
exports.pagesTool_0509 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0509:', error);
    throw error;
  }
};
