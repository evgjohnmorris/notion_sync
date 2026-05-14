/**
 * Generated Tool: searchTool_0292
 * Domain: Search
 * ID: 0292
 */
exports.searchTool_0292 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0292:', error);
    throw error;
  }
};
