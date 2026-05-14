/**
 * Generated Tool: pagesTool_0147
 * Domain: Pages
 * ID: 0147
 */
exports.pagesTool_0147 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0147:', error);
    throw error;
  }
};
