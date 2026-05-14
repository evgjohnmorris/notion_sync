/**
 * Generated Tool: pagesTool_0763
 * Domain: Pages
 * ID: 0763
 */
exports.pagesTool_0763 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0763:', error);
    throw error;
  }
};
