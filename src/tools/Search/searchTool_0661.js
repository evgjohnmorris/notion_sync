/**
 * Generated Tool: searchTool_0661
 * Domain: Search
 * ID: 0661
 */
exports.searchTool_0661 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0661:', error);
    throw error;
  }
};
