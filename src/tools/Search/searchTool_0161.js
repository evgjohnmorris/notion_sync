/**
 * Generated Tool: searchTool_0161
 * Domain: Search
 * ID: 0161
 */
exports.searchTool_0161 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0161:', error);
    throw error;
  }
};
