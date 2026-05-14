/**
 * Generated Tool: searchTool_0938
 * Domain: Search
 * ID: 0938
 */
exports.searchTool_0938 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0938:', error);
    throw error;
  }
};
