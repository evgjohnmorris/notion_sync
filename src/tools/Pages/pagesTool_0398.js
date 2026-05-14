/**
 * Generated Tool: pagesTool_0398
 * Domain: Pages
 * ID: 0398
 */
exports.pagesTool_0398 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0398:', error);
    throw error;
  }
};
