/**
 * Generated Tool: pagesTool_0267
 * Domain: Pages
 * ID: 0267
 */
exports.pagesTool_0267 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0267:', error);
    throw error;
  }
};
