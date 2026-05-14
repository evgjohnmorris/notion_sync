/**
 * Generated Tool: searchTool_0832
 * Domain: Search
 * ID: 0832
 */
exports.searchTool_0832 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0832:', error);
    throw error;
  }
};
