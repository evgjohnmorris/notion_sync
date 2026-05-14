/**
 * Generated Tool: searchTool_0077
 * Domain: Search
 * ID: 0077
 */
exports.searchTool_0077 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0077:', error);
    throw error;
  }
};
