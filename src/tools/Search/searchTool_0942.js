/**
 * Generated Tool: searchTool_0942
 * Domain: Search
 * ID: 0942
 */
exports.searchTool_0942 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0942:', error);
    throw error;
  }
};
