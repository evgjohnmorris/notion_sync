/**
 * Generated Tool: pagesTool_0964
 * Domain: Pages
 * ID: 0964
 */
exports.pagesTool_0964 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0964:', error);
    throw error;
  }
};
