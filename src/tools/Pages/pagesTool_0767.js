/**
 * Generated Tool: pagesTool_0767
 * Domain: Pages
 * ID: 0767
 */
exports.pagesTool_0767 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0767:', error);
    throw error;
  }
};
