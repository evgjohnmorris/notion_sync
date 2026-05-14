/**
 * Generated Tool: pagesTool_0372
 * Domain: Pages
 * ID: 0372
 */
exports.pagesTool_0372 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0372:', error);
    throw error;
  }
};
