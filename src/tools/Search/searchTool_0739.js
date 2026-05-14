/**
 * Generated Tool: searchTool_0739
 * Domain: Search
 * ID: 0739
 */
exports.searchTool_0739 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0739:', error);
    throw error;
  }
};
