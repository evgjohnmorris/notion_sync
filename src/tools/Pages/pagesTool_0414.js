/**
 * Generated Tool: pagesTool_0414
 * Domain: Pages
 * ID: 0414
 */
exports.pagesTool_0414 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0414:', error);
    throw error;
  }
};
