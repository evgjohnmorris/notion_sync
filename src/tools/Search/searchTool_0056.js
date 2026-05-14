/**
 * Generated Tool: searchTool_0056
 * Domain: Search
 * ID: 0056
 */
exports.searchTool_0056 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0056:', error);
    throw error;
  }
};
