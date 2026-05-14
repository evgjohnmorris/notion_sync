/**
 * Generated Tool: pagesTool_0926
 * Domain: Pages
 * ID: 0926
 */
exports.pagesTool_0926 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0926:', error);
    throw error;
  }
};
