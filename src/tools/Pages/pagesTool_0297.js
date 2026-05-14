/**
 * Generated Tool: pagesTool_0297
 * Domain: Pages
 * ID: 0297
 */
exports.pagesTool_0297 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0297:', error);
    throw error;
  }
};
