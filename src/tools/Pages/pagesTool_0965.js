/**
 * Generated Tool: pagesTool_0965
 * Domain: Pages
 * ID: 0965
 */
exports.pagesTool_0965 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0965:', error);
    throw error;
  }
};
