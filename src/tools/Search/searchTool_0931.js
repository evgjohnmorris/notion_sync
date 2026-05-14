/**
 * Generated Tool: searchTool_0931
 * Domain: Search
 * ID: 0931
 */
exports.searchTool_0931 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0931:', error);
    throw error;
  }
};
