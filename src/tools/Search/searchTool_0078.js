/**
 * Generated Tool: searchTool_0078
 * Domain: Search
 * ID: 0078
 */
exports.searchTool_0078 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0078:', error);
    throw error;
  }
};
