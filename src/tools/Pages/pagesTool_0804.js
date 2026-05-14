/**
 * Generated Tool: pagesTool_0804
 * Domain: Pages
 * ID: 0804
 */
exports.pagesTool_0804 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0804:', error);
    throw error;
  }
};
