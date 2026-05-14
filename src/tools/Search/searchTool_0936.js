/**
 * Generated Tool: searchTool_0936
 * Domain: Search
 * ID: 0936
 */
exports.searchTool_0936 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0936:', error);
    throw error;
  }
};
