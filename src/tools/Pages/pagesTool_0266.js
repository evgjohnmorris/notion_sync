/**
 * Generated Tool: pagesTool_0266
 * Domain: Pages
 * ID: 0266
 */
exports.pagesTool_0266 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0266:', error);
    throw error;
  }
};
