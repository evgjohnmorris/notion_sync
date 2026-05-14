/**
 * Generated Tool: pagesTool_0441
 * Domain: Pages
 * ID: 0441
 */
exports.pagesTool_0441 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0441:', error);
    throw error;
  }
};
