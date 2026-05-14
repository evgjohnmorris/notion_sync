/**
 * Generated Tool: pagesTool_0305
 * Domain: Pages
 * ID: 0305
 */
exports.pagesTool_0305 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0305:', error);
    throw error;
  }
};
