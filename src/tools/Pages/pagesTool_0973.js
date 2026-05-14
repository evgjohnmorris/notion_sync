/**
 * Generated Tool: pagesTool_0973
 * Domain: Pages
 * ID: 0973
 */
exports.pagesTool_0973 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0973:', error);
    throw error;
  }
};
