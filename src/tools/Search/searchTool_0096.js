/**
 * Generated Tool: searchTool_0096
 * Domain: Search
 * ID: 0096
 */
exports.searchTool_0096 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0096:', error);
    throw error;
  }
};
