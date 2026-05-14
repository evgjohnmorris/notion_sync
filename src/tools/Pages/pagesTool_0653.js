/**
 * Generated Tool: pagesTool_0653
 * Domain: Pages
 * ID: 0653
 */
exports.pagesTool_0653 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0653:', error);
    throw error;
  }
};
