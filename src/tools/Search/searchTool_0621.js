/**
 * Generated Tool: searchTool_0621
 * Domain: Search
 * ID: 0621
 */
exports.searchTool_0621 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0621:', error);
    throw error;
  }
};
