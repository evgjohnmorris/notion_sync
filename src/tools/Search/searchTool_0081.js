/**
 * Generated Tool: searchTool_0081
 * Domain: Search
 * ID: 0081
 */
exports.searchTool_0081 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0081:', error);
    throw error;
  }
};
