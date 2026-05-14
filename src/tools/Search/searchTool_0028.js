/**
 * Generated Tool: searchTool_0028
 * Domain: Search
 * ID: 0028
 */
exports.searchTool_0028 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0028:', error);
    throw error;
  }
};
