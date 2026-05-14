/**
 * Generated Tool: searchTool_0470
 * Domain: Search
 * ID: 0470
 */
exports.searchTool_0470 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0470:', error);
    throw error;
  }
};
