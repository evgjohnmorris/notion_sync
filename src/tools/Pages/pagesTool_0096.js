/**
 * Generated Tool: pagesTool_0096
 * Domain: Pages
 * ID: 0096
 */
exports.pagesTool_0096 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0096:', error);
    throw error;
  }
};
