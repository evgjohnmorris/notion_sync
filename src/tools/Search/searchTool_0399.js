/**
 * Generated Tool: searchTool_0399
 * Domain: Search
 * ID: 0399
 */
exports.searchTool_0399 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0399:', error);
    throw error;
  }
};
