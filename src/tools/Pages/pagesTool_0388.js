/**
 * Generated Tool: pagesTool_0388
 * Domain: Pages
 * ID: 0388
 */
exports.pagesTool_0388 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0388:', error);
    throw error;
  }
};
