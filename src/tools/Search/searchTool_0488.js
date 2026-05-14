/**
 * Generated Tool: searchTool_0488
 * Domain: Search
 * ID: 0488
 */
exports.searchTool_0488 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0488:', error);
    throw error;
  }
};
