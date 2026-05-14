/**
 * Generated Tool: pagesTool_0156
 * Domain: Pages
 * ID: 0156
 */
exports.pagesTool_0156 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0156:', error);
    throw error;
  }
};
