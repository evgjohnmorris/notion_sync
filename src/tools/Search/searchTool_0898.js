/**
 * Generated Tool: searchTool_0898
 * Domain: Search
 * ID: 0898
 */
exports.searchTool_0898 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0898:', error);
    throw error;
  }
};
