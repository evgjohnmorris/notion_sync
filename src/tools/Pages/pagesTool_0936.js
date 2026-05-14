/**
 * Generated Tool: pagesTool_0936
 * Domain: Pages
 * ID: 0936
 */
exports.pagesTool_0936 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0936:', error);
    throw error;
  }
};
