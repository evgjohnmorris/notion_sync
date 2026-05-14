/**
 * Generated Tool: searchTool_0984
 * Domain: Search
 * ID: 0984
 */
exports.searchTool_0984 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0984:', error);
    throw error;
  }
};
