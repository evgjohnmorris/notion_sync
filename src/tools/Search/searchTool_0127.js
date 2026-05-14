/**
 * Generated Tool: searchTool_0127
 * Domain: Search
 * ID: 0127
 */
exports.searchTool_0127 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0127:', error);
    throw error;
  }
};
