/**
 * Generated Tool: searchTool_0044
 * Domain: Search
 * ID: 0044
 */
exports.searchTool_0044 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0044:', error);
    throw error;
  }
};
