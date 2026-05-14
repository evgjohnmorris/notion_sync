/**
 * Generated Tool: pagesTool_0698
 * Domain: Pages
 * ID: 0698
 */
exports.pagesTool_0698 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0698:', error);
    throw error;
  }
};
