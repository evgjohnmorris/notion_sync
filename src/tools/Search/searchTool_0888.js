/**
 * Generated Tool: searchTool_0888
 * Domain: Search
 * ID: 0888
 */
exports.searchTool_0888 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0888:', error);
    throw error;
  }
};
