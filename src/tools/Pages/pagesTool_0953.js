/**
 * Generated Tool: pagesTool_0953
 * Domain: Pages
 * ID: 0953
 */
exports.pagesTool_0953 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0953:', error);
    throw error;
  }
};
