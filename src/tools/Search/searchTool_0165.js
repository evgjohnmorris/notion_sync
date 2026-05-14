/**
 * Generated Tool: searchTool_0165
 * Domain: Search
 * ID: 0165
 */
exports.searchTool_0165 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0165:', error);
    throw error;
  }
};
