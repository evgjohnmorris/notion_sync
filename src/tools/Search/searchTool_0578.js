/**
 * Generated Tool: searchTool_0578
 * Domain: Search
 * ID: 0578
 */
exports.searchTool_0578 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0578:', error);
    throw error;
  }
};
