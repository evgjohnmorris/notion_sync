/**
 * Generated Tool: searchTool_0851
 * Domain: Search
 * ID: 0851
 */
exports.searchTool_0851 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0851:', error);
    throw error;
  }
};
