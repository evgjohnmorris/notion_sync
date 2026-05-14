/**
 * Generated Tool: searchTool_0552
 * Domain: Search
 * ID: 0552
 */
exports.searchTool_0552 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0552:', error);
    throw error;
  }
};
