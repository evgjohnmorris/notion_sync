/**
 * Generated Tool: pagesTool_0253
 * Domain: Pages
 * ID: 0253
 */
exports.pagesTool_0253 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0253:', error);
    throw error;
  }
};
