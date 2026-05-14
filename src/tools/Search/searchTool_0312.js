/**
 * Generated Tool: searchTool_0312
 * Domain: Search
 * ID: 0312
 */
exports.searchTool_0312 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0312:', error);
    throw error;
  }
};
