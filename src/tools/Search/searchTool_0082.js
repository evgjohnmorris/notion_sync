/**
 * Generated Tool: searchTool_0082
 * Domain: Search
 * ID: 0082
 */
exports.searchTool_0082 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0082:', error);
    throw error;
  }
};
