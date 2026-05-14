/**
 * Generated Tool: searchTool_0854
 * Domain: Search
 * ID: 0854
 */
exports.searchTool_0854 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0854:', error);
    throw error;
  }
};
