/**
 * Generated Tool: searchTool_0698
 * Domain: Search
 * ID: 0698
 */
exports.searchTool_0698 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0698:', error);
    throw error;
  }
};
