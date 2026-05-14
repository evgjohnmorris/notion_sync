/**
 * Generated Tool: pagesTool_0273
 * Domain: Pages
 * ID: 0273
 */
exports.pagesTool_0273 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0273:', error);
    throw error;
  }
};
