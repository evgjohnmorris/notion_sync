/**
 * Generated Tool: pagesTool_0866
 * Domain: Pages
 * ID: 0866
 */
exports.pagesTool_0866 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0866:', error);
    throw error;
  }
};
