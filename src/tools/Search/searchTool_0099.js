/**
 * Generated Tool: searchTool_0099
 * Domain: Search
 * ID: 0099
 */
exports.searchTool_0099 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0099:', error);
    throw error;
  }
};
