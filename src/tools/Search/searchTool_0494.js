/**
 * Generated Tool: searchTool_0494
 * Domain: Search
 * ID: 0494
 */
exports.searchTool_0494 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0494:', error);
    throw error;
  }
};
