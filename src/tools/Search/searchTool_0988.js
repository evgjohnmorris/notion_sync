/**
 * Generated Tool: searchTool_0988
 * Domain: Search
 * ID: 0988
 */
exports.searchTool_0988 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0988:', error);
    throw error;
  }
};
