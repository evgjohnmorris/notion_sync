/**
 * Generated Tool: searchTool_0239
 * Domain: Search
 * ID: 0239
 */
exports.searchTool_0239 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0239:', error);
    throw error;
  }
};
