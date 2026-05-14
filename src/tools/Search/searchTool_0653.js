/**
 * Generated Tool: searchTool_0653
 * Domain: Search
 * ID: 0653
 */
exports.searchTool_0653 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0653:', error);
    throw error;
  }
};
