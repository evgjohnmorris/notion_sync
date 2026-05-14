/**
 * Generated Tool: searchTool_0782
 * Domain: Search
 * ID: 0782
 */
exports.searchTool_0782 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0782:', error);
    throw error;
  }
};
