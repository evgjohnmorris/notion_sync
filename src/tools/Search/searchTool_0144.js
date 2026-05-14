/**
 * Generated Tool: searchTool_0144
 * Domain: Search
 * ID: 0144
 */
exports.searchTool_0144 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0144:', error);
    throw error;
  }
};
