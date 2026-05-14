/**
 * Generated Tool: pagesTool_0292
 * Domain: Pages
 * ID: 0292
 */
exports.pagesTool_0292 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0292:', error);
    throw error;
  }
};
