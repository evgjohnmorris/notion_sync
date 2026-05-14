/**
 * Generated Tool: pagesTool_0337
 * Domain: Pages
 * ID: 0337
 */
exports.pagesTool_0337 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0337:', error);
    throw error;
  }
};
