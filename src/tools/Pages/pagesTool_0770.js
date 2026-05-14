/**
 * Generated Tool: pagesTool_0770
 * Domain: Pages
 * ID: 0770
 */
exports.pagesTool_0770 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0770:', error);
    throw error;
  }
};
