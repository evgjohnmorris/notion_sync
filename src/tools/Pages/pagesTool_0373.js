/**
 * Generated Tool: pagesTool_0373
 * Domain: Pages
 * ID: 0373
 */
exports.pagesTool_0373 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0373:', error);
    throw error;
  }
};
