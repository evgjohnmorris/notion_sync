/**
 * Generated Tool: searchTool_0656
 * Domain: Search
 * ID: 0656
 */
exports.searchTool_0656 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0656:', error);
    throw error;
  }
};
