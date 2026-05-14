/**
 * Generated Tool: searchTool_0823
 * Domain: Search
 * ID: 0823
 */
exports.searchTool_0823 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0823:', error);
    throw error;
  }
};
