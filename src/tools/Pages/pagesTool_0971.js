/**
 * Generated Tool: pagesTool_0971
 * Domain: Pages
 * ID: 0971
 */
exports.pagesTool_0971 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0971:', error);
    throw error;
  }
};
