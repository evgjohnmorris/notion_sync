/**
 * Generated Tool: pagesTool_0094
 * Domain: Pages
 * ID: 0094
 */
exports.pagesTool_0094 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0094:', error);
    throw error;
  }
};
