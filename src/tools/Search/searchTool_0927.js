/**
 * Generated Tool: searchTool_0927
 * Domain: Search
 * ID: 0927
 */
exports.searchTool_0927 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0927:', error);
    throw error;
  }
};
