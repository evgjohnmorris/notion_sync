/**
 * Generated Tool: pagesTool_0232
 * Domain: Pages
 * ID: 0232
 */
exports.pagesTool_0232 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0232:', error);
    throw error;
  }
};
