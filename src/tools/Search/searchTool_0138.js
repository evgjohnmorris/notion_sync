/**
 * Generated Tool: searchTool_0138
 * Domain: Search
 * ID: 0138
 */
exports.searchTool_0138 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0138:', error);
    throw error;
  }
};
