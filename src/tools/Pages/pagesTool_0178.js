/**
 * Generated Tool: pagesTool_0178
 * Domain: Pages
 * ID: 0178
 */
exports.pagesTool_0178 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0178:', error);
    throw error;
  }
};
