/**
 * Generated Tool: pagesTool_0186
 * Domain: Pages
 * ID: 0186
 */
exports.pagesTool_0186 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0186:', error);
    throw error;
  }
};
