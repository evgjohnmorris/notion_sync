/**
 * Generated Tool: pagesTool_0195
 * Domain: Pages
 * ID: 0195
 */
exports.pagesTool_0195 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0195:', error);
    throw error;
  }
};
