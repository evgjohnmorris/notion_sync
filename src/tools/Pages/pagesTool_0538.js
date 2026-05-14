/**
 * Generated Tool: pagesTool_0538
 * Domain: Pages
 * ID: 0538
 */
exports.pagesTool_0538 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0538:', error);
    throw error;
  }
};
