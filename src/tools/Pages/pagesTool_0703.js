/**
 * Generated Tool: pagesTool_0703
 * Domain: Pages
 * ID: 0703
 */
exports.pagesTool_0703 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0703:', error);
    throw error;
  }
};
