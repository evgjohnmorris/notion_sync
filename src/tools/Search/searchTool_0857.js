/**
 * Generated Tool: searchTool_0857
 * Domain: Search
 * ID: 0857
 */
exports.searchTool_0857 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0857:', error);
    throw error;
  }
};
