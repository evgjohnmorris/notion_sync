/**
 * Generated Tool: pagesTool_0161
 * Domain: Pages
 * ID: 0161
 */
exports.pagesTool_0161 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0161:', error);
    throw error;
  }
};
