/**
 * Generated Tool: pagesTool_0560
 * Domain: Pages
 * ID: 0560
 */
exports.pagesTool_0560 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0560:', error);
    throw error;
  }
};
