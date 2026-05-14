/**
 * Generated Tool: searchTool_0723
 * Domain: Search
 * ID: 0723
 */
exports.searchTool_0723 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0723:', error);
    throw error;
  }
};
