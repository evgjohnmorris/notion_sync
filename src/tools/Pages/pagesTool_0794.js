/**
 * Generated Tool: pagesTool_0794
 * Domain: Pages
 * ID: 0794
 */
exports.pagesTool_0794 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0794:', error);
    throw error;
  }
};
