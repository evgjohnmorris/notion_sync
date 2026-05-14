/**
 * Generated Tool: pagesTool_0387
 * Domain: Pages
 * ID: 0387
 */
exports.pagesTool_0387 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0387:', error);
    throw error;
  }
};
