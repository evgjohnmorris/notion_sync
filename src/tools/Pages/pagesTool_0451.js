/**
 * Generated Tool: pagesTool_0451
 * Domain: Pages
 * ID: 0451
 */
exports.pagesTool_0451 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0451:', error);
    throw error;
  }
};
