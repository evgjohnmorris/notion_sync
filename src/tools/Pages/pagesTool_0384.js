/**
 * Generated Tool: pagesTool_0384
 * Domain: Pages
 * ID: 0384
 */
exports.pagesTool_0384 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0384:', error);
    throw error;
  }
};
