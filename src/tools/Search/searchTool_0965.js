/**
 * Generated Tool: searchTool_0965
 * Domain: Search
 * ID: 0965
 */
exports.searchTool_0965 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0965:', error);
    throw error;
  }
};
