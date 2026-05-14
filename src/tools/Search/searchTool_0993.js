/**
 * Generated Tool: searchTool_0993
 * Domain: Search
 * ID: 0993
 */
exports.searchTool_0993 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0993:', error);
    throw error;
  }
};
