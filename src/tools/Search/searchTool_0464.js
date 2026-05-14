/**
 * Generated Tool: searchTool_0464
 * Domain: Search
 * ID: 0464
 */
exports.searchTool_0464 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0464:', error);
    throw error;
  }
};
