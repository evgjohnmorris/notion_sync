/**
 * Generated Tool: pagesTool_0378
 * Domain: Pages
 * ID: 0378
 */
exports.pagesTool_0378 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0378:', error);
    throw error;
  }
};
