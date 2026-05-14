/**
 * Generated Tool: searchTool_0657
 * Domain: Search
 * ID: 0657
 */
exports.searchTool_0657 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0657:', error);
    throw error;
  }
};
