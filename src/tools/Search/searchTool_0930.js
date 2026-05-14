/**
 * Generated Tool: searchTool_0930
 * Domain: Search
 * ID: 0930
 */
exports.searchTool_0930 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0930:', error);
    throw error;
  }
};
