/**
 * Generated Tool: searchTool_0269
 * Domain: Search
 * ID: 0269
 */
exports.searchTool_0269 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0269:', error);
    throw error;
  }
};
