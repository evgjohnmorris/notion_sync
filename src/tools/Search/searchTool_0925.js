/**
 * Generated Tool: searchTool_0925
 * Domain: Search
 * ID: 0925
 */
exports.searchTool_0925 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0925:', error);
    throw error;
  }
};
