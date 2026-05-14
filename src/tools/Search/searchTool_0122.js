/**
 * Generated Tool: searchTool_0122
 * Domain: Search
 * ID: 0122
 */
exports.searchTool_0122 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0122:', error);
    throw error;
  }
};
