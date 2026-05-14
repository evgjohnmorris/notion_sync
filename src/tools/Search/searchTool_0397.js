/**
 * Generated Tool: searchTool_0397
 * Domain: Search
 * ID: 0397
 */
exports.searchTool_0397 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0397:', error);
    throw error;
  }
};
