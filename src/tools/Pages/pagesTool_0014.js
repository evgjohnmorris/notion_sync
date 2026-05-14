/**
 * Generated Tool: pagesTool_0014
 * Domain: Pages
 * ID: 0014
 */
exports.pagesTool_0014 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0014:', error);
    throw error;
  }
};
