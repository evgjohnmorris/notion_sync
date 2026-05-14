/**
 * Generated Tool: pagesTool_0439
 * Domain: Pages
 * ID: 0439
 */
exports.pagesTool_0439 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0439:', error);
    throw error;
  }
};
