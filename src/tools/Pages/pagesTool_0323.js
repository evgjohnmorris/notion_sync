/**
 * Generated Tool: pagesTool_0323
 * Domain: Pages
 * ID: 0323
 */
exports.pagesTool_0323 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0323:', error);
    throw error;
  }
};
