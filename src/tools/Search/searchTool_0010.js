/**
 * Generated Tool: searchTool_0010
 * Domain: Search
 * ID: 0010
 */
exports.searchTool_0010 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0010:', error);
    throw error;
  }
};
