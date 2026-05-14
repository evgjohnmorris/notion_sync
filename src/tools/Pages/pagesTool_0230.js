/**
 * Generated Tool: pagesTool_0230
 * Domain: Pages
 * ID: 0230
 */
exports.pagesTool_0230 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0230:', error);
    throw error;
  }
};
