/**
 * Generated Tool: searchTool_0064
 * Domain: Search
 * ID: 0064
 */
exports.searchTool_0064 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0064:', error);
    throw error;
  }
};
