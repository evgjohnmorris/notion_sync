/**
 * Generated Tool: searchTool_0538
 * Domain: Search
 * ID: 0538
 */
exports.searchTool_0538 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0538:', error);
    throw error;
  }
};
