/**
 * Generated Tool: pagesTool_0353
 * Domain: Pages
 * ID: 0353
 */
exports.pagesTool_0353 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0353:', error);
    throw error;
  }
};
