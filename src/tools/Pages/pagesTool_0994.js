/**
 * Generated Tool: pagesTool_0994
 * Domain: Pages
 * ID: 0994
 */
exports.pagesTool_0994 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0994:', error);
    throw error;
  }
};
