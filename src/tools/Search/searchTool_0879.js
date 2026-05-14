/**
 * Generated Tool: searchTool_0879
 * Domain: Search
 * ID: 0879
 */
exports.searchTool_0879 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0879:', error);
    throw error;
  }
};
