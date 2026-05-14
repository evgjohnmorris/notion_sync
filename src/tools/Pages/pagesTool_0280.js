/**
 * Generated Tool: pagesTool_0280
 * Domain: Pages
 * ID: 0280
 */
exports.pagesTool_0280 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0280:', error);
    throw error;
  }
};
