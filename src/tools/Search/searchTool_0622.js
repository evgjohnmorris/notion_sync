/**
 * Generated Tool: searchTool_0622
 * Domain: Search
 * ID: 0622
 */
exports.searchTool_0622 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0622:', error);
    throw error;
  }
};
