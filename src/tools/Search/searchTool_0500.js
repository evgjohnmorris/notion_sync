/**
 * Generated Tool: searchTool_0500
 * Domain: Search
 * ID: 0500
 */
exports.searchTool_0500 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0500:', error);
    throw error;
  }
};
