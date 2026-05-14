/**
 * Generated Tool: pagesTool_0325
 * Domain: Pages
 * ID: 0325
 */
exports.pagesTool_0325 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0325:', error);
    throw error;
  }
};
