/**
 * Generated Tool: searchTool_0968
 * Domain: Search
 * ID: 0968
 */
exports.searchTool_0968 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0968:', error);
    throw error;
  }
};
