/**
 * Generated Tool: pagesTool_0027
 * Domain: Pages
 * ID: 0027
 */
exports.pagesTool_0027 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0027:', error);
    throw error;
  }
};
