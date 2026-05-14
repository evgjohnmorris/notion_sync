/**
 * Generated Tool: searchTool_0433
 * Domain: Search
 * ID: 0433
 */
exports.searchTool_0433 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0433:', error);
    throw error;
  }
};
