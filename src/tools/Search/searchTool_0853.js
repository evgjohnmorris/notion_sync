/**
 * Generated Tool: searchTool_0853
 * Domain: Search
 * ID: 0853
 */
exports.searchTool_0853 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0853:', error);
    throw error;
  }
};
