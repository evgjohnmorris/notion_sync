/**
 * Generated Tool: pagesTool_0438
 * Domain: Pages
 * ID: 0438
 */
exports.pagesTool_0438 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0438:', error);
    throw error;
  }
};
