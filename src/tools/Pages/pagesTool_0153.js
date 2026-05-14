/**
 * Generated Tool: pagesTool_0153
 * Domain: Pages
 * ID: 0153
 */
exports.pagesTool_0153 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0153:', error);
    throw error;
  }
};
