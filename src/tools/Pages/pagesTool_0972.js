/**
 * Generated Tool: pagesTool_0972
 * Domain: Pages
 * ID: 0972
 */
exports.pagesTool_0972 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0972:', error);
    throw error;
  }
};
