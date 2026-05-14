/**
 * Generated Tool: pagesTool_0314
 * Domain: Pages
 * ID: 0314
 */
exports.pagesTool_0314 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0314:', error);
    throw error;
  }
};
