/**
 * Generated Tool: searchTool_0415
 * Domain: Search
 * ID: 0415
 */
exports.searchTool_0415 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0415:', error);
    throw error;
  }
};
