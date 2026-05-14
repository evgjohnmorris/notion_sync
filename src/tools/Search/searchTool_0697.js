/**
 * Generated Tool: searchTool_0697
 * Domain: Search
 * ID: 0697
 */
exports.searchTool_0697 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0697:', error);
    throw error;
  }
};
