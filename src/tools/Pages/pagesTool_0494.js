/**
 * Generated Tool: pagesTool_0494
 * Domain: Pages
 * ID: 0494
 */
exports.pagesTool_0494 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0494:', error);
    throw error;
  }
};
