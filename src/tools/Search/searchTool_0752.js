/**
 * Generated Tool: searchTool_0752
 * Domain: Search
 * ID: 0752
 */
exports.searchTool_0752 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0752:', error);
    throw error;
  }
};
