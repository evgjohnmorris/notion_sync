/**
 * Generated Tool: searchTool_0156
 * Domain: Search
 * ID: 0156
 */
exports.searchTool_0156 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0156:', error);
    throw error;
  }
};
