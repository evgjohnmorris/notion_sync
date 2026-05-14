/**
 * Generated Tool: searchTool_0831
 * Domain: Search
 * ID: 0831
 */
exports.searchTool_0831 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0831:', error);
    throw error;
  }
};
