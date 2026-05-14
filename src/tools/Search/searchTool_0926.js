/**
 * Generated Tool: searchTool_0926
 * Domain: Search
 * ID: 0926
 */
exports.searchTool_0926 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0926:', error);
    throw error;
  }
};
