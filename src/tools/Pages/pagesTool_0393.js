/**
 * Generated Tool: pagesTool_0393
 * Domain: Pages
 * ID: 0393
 */
exports.pagesTool_0393 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0393:', error);
    throw error;
  }
};
