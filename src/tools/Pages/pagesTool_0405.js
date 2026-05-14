/**
 * Generated Tool: pagesTool_0405
 * Domain: Pages
 * ID: 0405
 */
exports.pagesTool_0405 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0405:', error);
    throw error;
  }
};
