/**
 * Generated Tool: searchTool_0159
 * Domain: Search
 * ID: 0159
 */
exports.searchTool_0159 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0159:', error);
    throw error;
  }
};
