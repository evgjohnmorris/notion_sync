/**
 * Generated Tool: searchTool_0305
 * Domain: Search
 * ID: 0305
 */
exports.searchTool_0305 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0305:', error);
    throw error;
  }
};
