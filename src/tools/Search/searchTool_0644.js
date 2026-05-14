/**
 * Generated Tool: searchTool_0644
 * Domain: Search
 * ID: 0644
 */
exports.searchTool_0644 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0644:', error);
    throw error;
  }
};
