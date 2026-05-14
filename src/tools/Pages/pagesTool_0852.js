/**
 * Generated Tool: pagesTool_0852
 * Domain: Pages
 * ID: 0852
 */
exports.pagesTool_0852 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0852:', error);
    throw error;
  }
};
