/**
 * Generated Tool: pagesTool_0602
 * Domain: Pages
 * ID: 0602
 */
exports.pagesTool_0602 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0602:', error);
    throw error;
  }
};
