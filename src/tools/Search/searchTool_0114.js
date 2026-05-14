/**
 * Generated Tool: searchTool_0114
 * Domain: Search
 * ID: 0114
 */
exports.searchTool_0114 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0114:', error);
    throw error;
  }
};
