/**
 * Generated Tool: searchTool_0337
 * Domain: Search
 * ID: 0337
 */
exports.searchTool_0337 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0337:', error);
    throw error;
  }
};
