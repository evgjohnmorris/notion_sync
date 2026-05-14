/**
 * Generated Tool: searchTool_0018
 * Domain: Search
 * ID: 0018
 */
exports.searchTool_0018 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0018:', error);
    throw error;
  }
};
