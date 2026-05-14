/**
 * Generated Tool: pagesTool_0901
 * Domain: Pages
 * ID: 0901
 */
exports.pagesTool_0901 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0901:', error);
    throw error;
  }
};
