/**
 * Generated Tool: pagesTool_0092
 * Domain: Pages
 * ID: 0092
 */
exports.pagesTool_0092 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0092:', error);
    throw error;
  }
};
