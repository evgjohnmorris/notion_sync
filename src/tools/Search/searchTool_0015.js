/**
 * Generated Tool: searchTool_0015
 * Domain: Search
 * ID: 0015
 */
exports.searchTool_0015 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0015:', error);
    throw error;
  }
};
