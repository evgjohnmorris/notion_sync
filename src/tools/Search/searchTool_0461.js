/**
 * Generated Tool: searchTool_0461
 * Domain: Search
 * ID: 0461
 */
exports.searchTool_0461 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0461:', error);
    throw error;
  }
};
