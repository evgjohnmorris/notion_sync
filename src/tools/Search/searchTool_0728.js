/**
 * Generated Tool: searchTool_0728
 * Domain: Search
 * ID: 0728
 */
exports.searchTool_0728 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0728:', error);
    throw error;
  }
};
