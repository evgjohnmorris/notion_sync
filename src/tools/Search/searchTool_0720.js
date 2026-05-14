/**
 * Generated Tool: searchTool_0720
 * Domain: Search
 * ID: 0720
 */
exports.searchTool_0720 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0720:', error);
    throw error;
  }
};
