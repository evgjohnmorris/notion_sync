/**
 * Generated Tool: pagesTool_0787
 * Domain: Pages
 * ID: 0787
 */
exports.pagesTool_0787 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0787:', error);
    throw error;
  }
};
