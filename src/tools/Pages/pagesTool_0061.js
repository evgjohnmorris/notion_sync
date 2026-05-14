/**
 * Generated Tool: pagesTool_0061
 * Domain: Pages
 * ID: 0061
 */
exports.pagesTool_0061 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0061:', error);
    throw error;
  }
};
