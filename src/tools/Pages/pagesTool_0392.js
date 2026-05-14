/**
 * Generated Tool: pagesTool_0392
 * Domain: Pages
 * ID: 0392
 */
exports.pagesTool_0392 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0392:', error);
    throw error;
  }
};
