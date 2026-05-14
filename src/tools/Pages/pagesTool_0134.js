/**
 * Generated Tool: pagesTool_0134
 * Domain: Pages
 * ID: 0134
 */
exports.pagesTool_0134 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0134:', error);
    throw error;
  }
};
