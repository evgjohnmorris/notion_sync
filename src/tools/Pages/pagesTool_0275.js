/**
 * Generated Tool: pagesTool_0275
 * Domain: Pages
 * ID: 0275
 */
exports.pagesTool_0275 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0275:', error);
    throw error;
  }
};
