/**
 * Generated Tool: pagesTool_0493
 * Domain: Pages
 * ID: 0493
 */
exports.pagesTool_0493 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0493:', error);
    throw error;
  }
};
