/**
 * Generated Tool: pagesTool_0172
 * Domain: Pages
 * ID: 0172
 */
exports.pagesTool_0172 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0172:', error);
    throw error;
  }
};
