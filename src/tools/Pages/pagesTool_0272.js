/**
 * Generated Tool: pagesTool_0272
 * Domain: Pages
 * ID: 0272
 */
exports.pagesTool_0272 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0272:', error);
    throw error;
  }
};
