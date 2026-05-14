/**
 * Generated Tool: searchTool_0498
 * Domain: Search
 * ID: 0498
 */
exports.searchTool_0498 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0498:', error);
    throw error;
  }
};
