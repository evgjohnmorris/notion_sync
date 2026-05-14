/**
 * Generated Tool: searchTool_0899
 * Domain: Search
 * ID: 0899
 */
exports.searchTool_0899 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0899:', error);
    throw error;
  }
};
