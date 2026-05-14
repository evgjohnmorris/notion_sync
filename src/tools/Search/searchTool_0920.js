/**
 * Generated Tool: searchTool_0920
 * Domain: Search
 * ID: 0920
 */
exports.searchTool_0920 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0920:', error);
    throw error;
  }
};
