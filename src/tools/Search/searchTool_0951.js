/**
 * Generated Tool: searchTool_0951
 * Domain: Search
 * ID: 0951
 */
exports.searchTool_0951 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0951:', error);
    throw error;
  }
};
