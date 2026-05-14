/**
 * Generated Tool: searchTool_0450
 * Domain: Search
 * ID: 0450
 */
exports.searchTool_0450 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0450:', error);
    throw error;
  }
};
