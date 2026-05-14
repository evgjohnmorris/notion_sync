/**
 * Generated Tool: pagesTool_0395
 * Domain: Pages
 * ID: 0395
 */
exports.pagesTool_0395 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0395:', error);
    throw error;
  }
};
