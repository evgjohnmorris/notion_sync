/**
 * Generated Tool: searchTool_0233
 * Domain: Search
 * ID: 0233
 */
exports.searchTool_0233 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0233:', error);
    throw error;
  }
};
