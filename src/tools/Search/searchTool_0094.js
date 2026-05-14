/**
 * Generated Tool: searchTool_0094
 * Domain: Search
 * ID: 0094
 */
exports.searchTool_0094 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0094:', error);
    throw error;
  }
};
