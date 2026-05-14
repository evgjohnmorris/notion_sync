/**
 * Generated Tool: pagesTool_0421
 * Domain: Pages
 * ID: 0421
 */
exports.pagesTool_0421 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0421:', error);
    throw error;
  }
};
