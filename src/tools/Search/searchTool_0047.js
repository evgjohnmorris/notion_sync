/**
 * Generated Tool: searchTool_0047
 * Domain: Search
 * ID: 0047
 */
exports.searchTool_0047 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0047:', error);
    throw error;
  }
};
