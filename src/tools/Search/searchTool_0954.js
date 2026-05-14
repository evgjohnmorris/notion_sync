/**
 * Generated Tool: searchTool_0954
 * Domain: Search
 * ID: 0954
 */
exports.searchTool_0954 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0954:', error);
    throw error;
  }
};
