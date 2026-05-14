/**
 * Generated Tool: searchTool_0933
 * Domain: Search
 * ID: 0933
 */
exports.searchTool_0933 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0933:', error);
    throw error;
  }
};
