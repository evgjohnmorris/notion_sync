/**
 * Generated Tool: pagesTool_0872
 * Domain: Pages
 * ID: 0872
 */
exports.pagesTool_0872 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0872:', error);
    throw error;
  }
};
