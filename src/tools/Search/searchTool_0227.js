/**
 * Generated Tool: searchTool_0227
 * Domain: Search
 * ID: 0227
 */
exports.searchTool_0227 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0227:', error);
    throw error;
  }
};
