/**
 * Generated Tool: pagesTool_0779
 * Domain: Pages
 * ID: 0779
 */
exports.pagesTool_0779 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0779:', error);
    throw error;
  }
};
