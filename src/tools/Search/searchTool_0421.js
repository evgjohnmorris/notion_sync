/**
 * Generated Tool: searchTool_0421
 * Domain: Search
 * ID: 0421
 */
exports.searchTool_0421 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0421:', error);
    throw error;
  }
};
