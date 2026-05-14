/**
 * Generated Tool: pagesTool_0233
 * Domain: Pages
 * ID: 0233
 */
exports.pagesTool_0233 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0233:', error);
    throw error;
  }
};
