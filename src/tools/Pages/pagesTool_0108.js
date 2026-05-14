/**
 * Generated Tool: pagesTool_0108
 * Domain: Pages
 * ID: 0108
 */
exports.pagesTool_0108 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0108:', error);
    throw error;
  }
};
