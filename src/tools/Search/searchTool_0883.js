/**
 * Generated Tool: searchTool_0883
 * Domain: Search
 * ID: 0883
 */
exports.searchTool_0883 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0883:', error);
    throw error;
  }
};
