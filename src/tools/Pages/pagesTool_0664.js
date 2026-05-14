/**
 * Generated Tool: pagesTool_0664
 * Domain: Pages
 * ID: 0664
 */
exports.pagesTool_0664 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0664:', error);
    throw error;
  }
};
