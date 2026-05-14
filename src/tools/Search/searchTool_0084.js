/**
 * Generated Tool: searchTool_0084
 * Domain: Search
 * ID: 0084
 */
exports.searchTool_0084 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0084:', error);
    throw error;
  }
};
