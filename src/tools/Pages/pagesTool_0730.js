/**
 * Generated Tool: pagesTool_0730
 * Domain: Pages
 * ID: 0730
 */
exports.pagesTool_0730 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0730:', error);
    throw error;
  }
};
