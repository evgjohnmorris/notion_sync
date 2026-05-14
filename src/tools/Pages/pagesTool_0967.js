/**
 * Generated Tool: pagesTool_0967
 * Domain: Pages
 * ID: 0967
 */
exports.pagesTool_0967 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0967:', error);
    throw error;
  }
};
