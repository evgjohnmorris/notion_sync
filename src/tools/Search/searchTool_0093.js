/**
 * Generated Tool: searchTool_0093
 * Domain: Search
 * ID: 0093
 */
exports.searchTool_0093 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0093:', error);
    throw error;
  }
};
