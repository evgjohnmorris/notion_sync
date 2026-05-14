/**
 * Generated Tool: searchTool_0660
 * Domain: Search
 * ID: 0660
 */
exports.searchTool_0660 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0660:', error);
    throw error;
  }
};
