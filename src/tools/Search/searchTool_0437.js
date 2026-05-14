/**
 * Generated Tool: searchTool_0437
 * Domain: Search
 * ID: 0437
 */
exports.searchTool_0437 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0437:', error);
    throw error;
  }
};
