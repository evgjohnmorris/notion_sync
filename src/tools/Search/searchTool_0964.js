/**
 * Generated Tool: searchTool_0964
 * Domain: Search
 * ID: 0964
 */
exports.searchTool_0964 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0964:', error);
    throw error;
  }
};
