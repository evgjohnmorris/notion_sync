/**
 * Generated Tool: pagesTool_0025
 * Domain: Pages
 * ID: 0025
 */
exports.pagesTool_0025 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0025:', error);
    throw error;
  }
};
