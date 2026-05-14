/**
 * Generated Tool: searchTool_0792
 * Domain: Search
 * ID: 0792
 */
exports.searchTool_0792 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0792:', error);
    throw error;
  }
};
