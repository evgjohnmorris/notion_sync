/**
 * Generated Tool: pagesTool_0806
 * Domain: Pages
 * ID: 0806
 */
exports.pagesTool_0806 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0806:', error);
    throw error;
  }
};
