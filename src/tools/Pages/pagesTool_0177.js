/**
 * Generated Tool: pagesTool_0177
 * Domain: Pages
 * ID: 0177
 */
exports.pagesTool_0177 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0177:', error);
    throw error;
  }
};
