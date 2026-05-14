/**
 * Generated Tool: searchTool_0323
 * Domain: Search
 * ID: 0323
 */
exports.searchTool_0323 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0323:', error);
    throw error;
  }
};
