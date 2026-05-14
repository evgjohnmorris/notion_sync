/**
 * Generated Tool: searchTool_0726
 * Domain: Search
 * ID: 0726
 */
exports.searchTool_0726 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0726:', error);
    throw error;
  }
};
