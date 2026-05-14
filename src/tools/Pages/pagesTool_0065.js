/**
 * Generated Tool: pagesTool_0065
 * Domain: Pages
 * ID: 0065
 */
exports.pagesTool_0065 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0065:', error);
    throw error;
  }
};
