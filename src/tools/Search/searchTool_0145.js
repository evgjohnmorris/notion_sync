/**
 * Generated Tool: searchTool_0145
 * Domain: Search
 * ID: 0145
 */
exports.searchTool_0145 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0145:', error);
    throw error;
  }
};
