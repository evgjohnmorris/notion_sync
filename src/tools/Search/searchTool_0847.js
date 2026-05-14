/**
 * Generated Tool: searchTool_0847
 * Domain: Search
 * ID: 0847
 */
exports.searchTool_0847 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0847:', error);
    throw error;
  }
};
