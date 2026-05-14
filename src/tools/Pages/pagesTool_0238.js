/**
 * Generated Tool: pagesTool_0238
 * Domain: Pages
 * ID: 0238
 */
exports.pagesTool_0238 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0238:', error);
    throw error;
  }
};
