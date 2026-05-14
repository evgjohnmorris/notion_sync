/**
 * Generated Tool: pagesTool_0244
 * Domain: Pages
 * ID: 0244
 */
exports.pagesTool_0244 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0244:', error);
    throw error;
  }
};
