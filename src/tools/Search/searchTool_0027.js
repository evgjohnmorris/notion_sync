/**
 * Generated Tool: searchTool_0027
 * Domain: Search
 * ID: 0027
 */
exports.searchTool_0027 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0027:', error);
    throw error;
  }
};
