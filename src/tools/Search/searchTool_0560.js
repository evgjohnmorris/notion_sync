/**
 * Generated Tool: searchTool_0560
 * Domain: Search
 * ID: 0560
 */
exports.searchTool_0560 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0560:', error);
    throw error;
  }
};
