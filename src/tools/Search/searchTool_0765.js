/**
 * Generated Tool: searchTool_0765
 * Domain: Search
 * ID: 0765
 */
exports.searchTool_0765 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0765:', error);
    throw error;
  }
};
