/**
 * Generated Tool: searchTool_0803
 * Domain: Search
 * ID: 0803
 */
exports.searchTool_0803 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0803:', error);
    throw error;
  }
};
