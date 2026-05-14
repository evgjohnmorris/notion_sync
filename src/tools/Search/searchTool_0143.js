/**
 * Generated Tool: searchTool_0143
 * Domain: Search
 * ID: 0143
 */
exports.searchTool_0143 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0143:', error);
    throw error;
  }
};
