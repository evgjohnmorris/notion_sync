/**
 * Generated Tool: pagesTool_0360
 * Domain: Pages
 * ID: 0360
 */
exports.pagesTool_0360 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0360:', error);
    throw error;
  }
};
