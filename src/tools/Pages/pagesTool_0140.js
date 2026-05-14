/**
 * Generated Tool: pagesTool_0140
 * Domain: Pages
 * ID: 0140
 */
exports.pagesTool_0140 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0140:', error);
    throw error;
  }
};
