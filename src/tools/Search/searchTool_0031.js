/**
 * Generated Tool: searchTool_0031
 * Domain: Search
 * ID: 0031
 */
exports.searchTool_0031 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0031:', error);
    throw error;
  }
};
