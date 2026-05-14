/**
 * Generated Tool: pagesTool_0247
 * Domain: Pages
 * ID: 0247
 */
exports.pagesTool_0247 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0247:', error);
    throw error;
  }
};
