/**
 * Generated Tool: searchTool_0479
 * Domain: Search
 * ID: 0479
 */
exports.searchTool_0479 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0479:', error);
    throw error;
  }
};
