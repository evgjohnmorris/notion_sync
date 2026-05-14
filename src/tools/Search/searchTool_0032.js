/**
 * Generated Tool: searchTool_0032
 * Domain: Search
 * ID: 0032
 */
exports.searchTool_0032 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0032:', error);
    throw error;
  }
};
