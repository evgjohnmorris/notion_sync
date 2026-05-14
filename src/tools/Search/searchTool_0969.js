/**
 * Generated Tool: searchTool_0969
 * Domain: Search
 * ID: 0969
 */
exports.searchTool_0969 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0969:', error);
    throw error;
  }
};
