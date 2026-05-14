/**
 * Generated Tool: pagesTool_0513
 * Domain: Pages
 * ID: 0513
 */
exports.pagesTool_0513 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0513:', error);
    throw error;
  }
};
