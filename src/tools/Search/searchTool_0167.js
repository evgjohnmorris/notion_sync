/**
 * Generated Tool: searchTool_0167
 * Domain: Search
 * ID: 0167
 */
exports.searchTool_0167 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0167:', error);
    throw error;
  }
};
