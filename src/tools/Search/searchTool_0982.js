/**
 * Generated Tool: searchTool_0982
 * Domain: Search
 * ID: 0982
 */
exports.searchTool_0982 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0982:', error);
    throw error;
  }
};
