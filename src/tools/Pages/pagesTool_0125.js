/**
 * Generated Tool: pagesTool_0125
 * Domain: Pages
 * ID: 0125
 */
exports.pagesTool_0125 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0125:', error);
    throw error;
  }
};
