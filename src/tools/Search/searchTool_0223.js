/**
 * Generated Tool: searchTool_0223
 * Domain: Search
 * ID: 0223
 */
exports.searchTool_0223 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0223:', error);
    throw error;
  }
};
