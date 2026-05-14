/**
 * Generated Tool: pagesTool_0978
 * Domain: Pages
 * ID: 0978
 */
exports.pagesTool_0978 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0978:', error);
    throw error;
  }
};
