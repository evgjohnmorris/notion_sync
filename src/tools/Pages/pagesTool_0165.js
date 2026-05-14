/**
 * Generated Tool: pagesTool_0165
 * Domain: Pages
 * ID: 0165
 */
exports.pagesTool_0165 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0165:', error);
    throw error;
  }
};
