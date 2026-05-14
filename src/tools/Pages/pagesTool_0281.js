/**
 * Generated Tool: pagesTool_0281
 * Domain: Pages
 * ID: 0281
 */
exports.pagesTool_0281 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0281:', error);
    throw error;
  }
};
