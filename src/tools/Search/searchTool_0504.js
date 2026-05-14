/**
 * Generated Tool: searchTool_0504
 * Domain: Search
 * ID: 0504
 */
exports.searchTool_0504 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0504:', error);
    throw error;
  }
};
