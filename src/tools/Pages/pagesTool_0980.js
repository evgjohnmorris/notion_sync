/**
 * Generated Tool: pagesTool_0980
 * Domain: Pages
 * ID: 0980
 */
exports.pagesTool_0980 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0980:', error);
    throw error;
  }
};
