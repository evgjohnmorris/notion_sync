/**
 * Generated Tool: pagesTool_0269
 * Domain: Pages
 * ID: 0269
 */
exports.pagesTool_0269 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0269:', error);
    throw error;
  }
};
