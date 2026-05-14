/**
 * Generated Tool: pagesTool_0383
 * Domain: Pages
 * ID: 0383
 */
exports.pagesTool_0383 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0383:', error);
    throw error;
  }
};
