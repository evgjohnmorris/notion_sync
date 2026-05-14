/**
 * Generated Tool: pagesTool_0418
 * Domain: Pages
 * ID: 0418
 */
exports.pagesTool_0418 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0418:', error);
    throw error;
  }
};
