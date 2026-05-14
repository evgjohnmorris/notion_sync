/**
 * Generated Tool: searchTool_0085
 * Domain: Search
 * ID: 0085
 */
exports.searchTool_0085 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0085:', error);
    throw error;
  }
};
