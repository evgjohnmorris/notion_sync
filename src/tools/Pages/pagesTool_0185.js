/**
 * Generated Tool: pagesTool_0185
 * Domain: Pages
 * ID: 0185
 */
exports.pagesTool_0185 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0185:', error);
    throw error;
  }
};
