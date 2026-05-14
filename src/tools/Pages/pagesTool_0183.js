/**
 * Generated Tool: pagesTool_0183
 * Domain: Pages
 * ID: 0183
 */
exports.pagesTool_0183 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0183:', error);
    throw error;
  }
};
