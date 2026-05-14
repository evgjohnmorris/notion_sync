/**
 * Generated Tool: searchTool_0136
 * Domain: Search
 * ID: 0136
 */
exports.searchTool_0136 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0136:', error);
    throw error;
  }
};
