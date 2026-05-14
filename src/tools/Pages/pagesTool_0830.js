/**
 * Generated Tool: pagesTool_0830
 * Domain: Pages
 * ID: 0830
 */
exports.pagesTool_0830 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0830:', error);
    throw error;
  }
};
