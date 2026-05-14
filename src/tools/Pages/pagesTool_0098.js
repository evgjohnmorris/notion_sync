/**
 * Generated Tool: pagesTool_0098
 * Domain: Pages
 * ID: 0098
 */
exports.pagesTool_0098 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0098:', error);
    throw error;
  }
};
