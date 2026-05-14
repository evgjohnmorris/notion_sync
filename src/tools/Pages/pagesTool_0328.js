/**
 * Generated Tool: pagesTool_0328
 * Domain: Pages
 * ID: 0328
 */
exports.pagesTool_0328 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0328:', error);
    throw error;
  }
};
