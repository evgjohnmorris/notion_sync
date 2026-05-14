/**
 * Generated Tool: pagesTool_0723
 * Domain: Pages
 * ID: 0723
 */
exports.pagesTool_0723 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0723:', error);
    throw error;
  }
};
