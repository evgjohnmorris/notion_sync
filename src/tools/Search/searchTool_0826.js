/**
 * Generated Tool: searchTool_0826
 * Domain: Search
 * ID: 0826
 */
exports.searchTool_0826 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0826:', error);
    throw error;
  }
};
