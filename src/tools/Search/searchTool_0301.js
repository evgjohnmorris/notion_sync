/**
 * Generated Tool: searchTool_0301
 * Domain: Search
 * ID: 0301
 */
exports.searchTool_0301 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0301:', error);
    throw error;
  }
};
