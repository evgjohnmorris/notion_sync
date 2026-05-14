/**
 * Generated Tool: searchTool_0757
 * Domain: Search
 * ID: 0757
 */
exports.searchTool_0757 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0757:', error);
    throw error;
  }
};
