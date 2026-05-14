/**
 * Generated Tool: searchTool_0485
 * Domain: Search
 * ID: 0485
 */
exports.searchTool_0485 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0485:', error);
    throw error;
  }
};
