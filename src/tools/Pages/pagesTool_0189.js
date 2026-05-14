/**
 * Generated Tool: pagesTool_0189
 * Domain: Pages
 * ID: 0189
 */
exports.pagesTool_0189 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0189:', error);
    throw error;
  }
};
