/**
 * Generated Tool: searchTool_0287
 * Domain: Search
 * ID: 0287
 */
exports.searchTool_0287 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0287:', error);
    throw error;
  }
};
