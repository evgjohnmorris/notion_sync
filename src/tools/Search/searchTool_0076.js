/**
 * Generated Tool: searchTool_0076
 * Domain: Search
 * ID: 0076
 */
exports.searchTool_0076 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0076:', error);
    throw error;
  }
};
