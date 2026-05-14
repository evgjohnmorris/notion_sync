/**
 * Generated Tool: searchTool_0921
 * Domain: Search
 * ID: 0921
 */
exports.searchTool_0921 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0921:', error);
    throw error;
  }
};
