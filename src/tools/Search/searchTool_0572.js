/**
 * Generated Tool: searchTool_0572
 * Domain: Search
 * ID: 0572
 */
exports.searchTool_0572 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0572:', error);
    throw error;
  }
};
