/**
 * Generated Tool: searchTool_0153
 * Domain: Search
 * ID: 0153
 */
exports.searchTool_0153 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0153:', error);
    throw error;
  }
};
