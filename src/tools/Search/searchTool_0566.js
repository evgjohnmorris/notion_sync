/**
 * Generated Tool: searchTool_0566
 * Domain: Search
 * ID: 0566
 */
exports.searchTool_0566 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0566:', error);
    throw error;
  }
};
