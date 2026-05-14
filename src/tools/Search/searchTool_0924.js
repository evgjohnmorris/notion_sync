/**
 * Generated Tool: searchTool_0924
 * Domain: Search
 * ID: 0924
 */
exports.searchTool_0924 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0924:', error);
    throw error;
  }
};
