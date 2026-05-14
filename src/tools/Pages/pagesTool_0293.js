/**
 * Generated Tool: pagesTool_0293
 * Domain: Pages
 * ID: 0293
 */
exports.pagesTool_0293 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0293:', error);
    throw error;
  }
};
