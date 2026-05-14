/**
 * Generated Tool: pagesTool_0415
 * Domain: Pages
 * ID: 0415
 */
exports.pagesTool_0415 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0415:', error);
    throw error;
  }
};
