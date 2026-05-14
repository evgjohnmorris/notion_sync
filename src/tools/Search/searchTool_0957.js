/**
 * Generated Tool: searchTool_0957
 * Domain: Search
 * ID: 0957
 */
exports.searchTool_0957 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0957:', error);
    throw error;
  }
};
