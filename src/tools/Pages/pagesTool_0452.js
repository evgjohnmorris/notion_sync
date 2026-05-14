/**
 * Generated Tool: pagesTool_0452
 * Domain: Pages
 * ID: 0452
 */
exports.pagesTool_0452 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0452:', error);
    throw error;
  }
};
