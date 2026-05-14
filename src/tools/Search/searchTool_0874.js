/**
 * Generated Tool: searchTool_0874
 * Domain: Search
 * ID: 0874
 */
exports.searchTool_0874 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0874:', error);
    throw error;
  }
};
