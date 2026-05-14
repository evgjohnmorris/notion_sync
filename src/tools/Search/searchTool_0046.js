/**
 * Generated Tool: searchTool_0046
 * Domain: Search
 * ID: 0046
 */
exports.searchTool_0046 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0046:', error);
    throw error;
  }
};
