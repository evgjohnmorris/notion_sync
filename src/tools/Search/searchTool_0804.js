/**
 * Generated Tool: searchTool_0804
 * Domain: Search
 * ID: 0804
 */
exports.searchTool_0804 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0804:', error);
    throw error;
  }
};
