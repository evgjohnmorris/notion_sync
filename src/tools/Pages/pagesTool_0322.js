/**
 * Generated Tool: pagesTool_0322
 * Domain: Pages
 * ID: 0322
 */
exports.pagesTool_0322 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0322:', error);
    throw error;
  }
};
