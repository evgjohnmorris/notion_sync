/**
 * Generated Tool: searchTool_0891
 * Domain: Search
 * ID: 0891
 */
exports.searchTool_0891 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0891:', error);
    throw error;
  }
};
