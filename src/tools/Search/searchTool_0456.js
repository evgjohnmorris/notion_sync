/**
 * Generated Tool: searchTool_0456
 * Domain: Search
 * ID: 0456
 */
exports.searchTool_0456 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0456:', error);
    throw error;
  }
};
