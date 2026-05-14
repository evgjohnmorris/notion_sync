/**
 * Generated Tool: pagesTool_0925
 * Domain: Pages
 * ID: 0925
 */
exports.pagesTool_0925 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0925:', error);
    throw error;
  }
};
