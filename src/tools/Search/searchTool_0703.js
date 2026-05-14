/**
 * Generated Tool: searchTool_0703
 * Domain: Search
 * ID: 0703
 */
exports.searchTool_0703 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0703:', error);
    throw error;
  }
};
