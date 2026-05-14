/**
 * Generated Tool: searchTool_0573
 * Domain: Search
 * ID: 0573
 */
exports.searchTool_0573 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0573:', error);
    throw error;
  }
};
