/**
 * Generated Tool: searchTool_0280
 * Domain: Search
 * ID: 0280
 */
exports.searchTool_0280 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0280:', error);
    throw error;
  }
};
