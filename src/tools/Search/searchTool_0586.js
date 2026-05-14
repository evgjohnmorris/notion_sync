/**
 * Generated Tool: searchTool_0586
 * Domain: Search
 * ID: 0586
 */
exports.searchTool_0586 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0586:', error);
    throw error;
  }
};
