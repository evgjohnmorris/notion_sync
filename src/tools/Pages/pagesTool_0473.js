/**
 * Generated Tool: pagesTool_0473
 * Domain: Pages
 * ID: 0473
 */
exports.pagesTool_0473 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0473:', error);
    throw error;
  }
};
