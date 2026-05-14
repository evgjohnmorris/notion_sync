/**
 * Generated Tool: pagesTool_0214
 * Domain: Pages
 * ID: 0214
 */
exports.pagesTool_0214 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0214:', error);
    throw error;
  }
};
