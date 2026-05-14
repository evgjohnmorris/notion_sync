/**
 * Generated Tool: pagesTool_0155
 * Domain: Pages
 * ID: 0155
 */
exports.pagesTool_0155 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0155:', error);
    throw error;
  }
};
