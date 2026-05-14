/**
 * Generated Tool: pagesTool_0160
 * Domain: Pages
 * ID: 0160
 */
exports.pagesTool_0160 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0160:', error);
    throw error;
  }
};
