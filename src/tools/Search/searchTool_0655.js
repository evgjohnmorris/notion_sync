/**
 * Generated Tool: searchTool_0655
 * Domain: Search
 * ID: 0655
 */
exports.searchTool_0655 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0655:', error);
    throw error;
  }
};
