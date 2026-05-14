/**
 * Generated Tool: pagesTool_0986
 * Domain: Pages
 * ID: 0986
 */
exports.pagesTool_0986 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0986:', error);
    throw error;
  }
};
