/**
 * Generated Tool: searchTool_0162
 * Domain: Search
 * ID: 0162
 */
exports.searchTool_0162 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0162:', error);
    throw error;
  }
};
