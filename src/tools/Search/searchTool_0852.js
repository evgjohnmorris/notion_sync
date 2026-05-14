/**
 * Generated Tool: searchTool_0852
 * Domain: Search
 * ID: 0852
 */
exports.searchTool_0852 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0852:', error);
    throw error;
  }
};
