/**
 * Generated Tool: searchTool_0892
 * Domain: Search
 * ID: 0892
 */
exports.searchTool_0892 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0892:', error);
    throw error;
  }
};
