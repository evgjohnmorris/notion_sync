/**
 * Generated Tool: searchTool_0198
 * Domain: Search
 * ID: 0198
 */
exports.searchTool_0198 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0198:', error);
    throw error;
  }
};
