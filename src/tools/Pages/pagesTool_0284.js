/**
 * Generated Tool: pagesTool_0284
 * Domain: Pages
 * ID: 0284
 */
exports.pagesTool_0284 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0284:', error);
    throw error;
  }
};
