/**
 * Generated Tool: searchTool_0725
 * Domain: Search
 * ID: 0725
 */
exports.searchTool_0725 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0725:', error);
    throw error;
  }
};
