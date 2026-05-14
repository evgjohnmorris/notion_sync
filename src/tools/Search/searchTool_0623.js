/**
 * Generated Tool: searchTool_0623
 * Domain: Search
 * ID: 0623
 */
exports.searchTool_0623 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0623:', error);
    throw error;
  }
};
