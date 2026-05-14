/**
 * Generated Tool: searchTool_0513
 * Domain: Search
 * ID: 0513
 */
exports.searchTool_0513 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0513:', error);
    throw error;
  }
};
