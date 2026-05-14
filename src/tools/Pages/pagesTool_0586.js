/**
 * Generated Tool: pagesTool_0586
 * Domain: Pages
 * ID: 0586
 */
exports.pagesTool_0586 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0586:', error);
    throw error;
  }
};
