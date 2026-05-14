/**
 * Generated Tool: searchTool_0300
 * Domain: Search
 * ID: 0300
 */
exports.searchTool_0300 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0300:', error);
    throw error;
  }
};
