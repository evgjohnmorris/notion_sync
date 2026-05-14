/**
 * Generated Tool: searchTool_0986
 * Domain: Search
 * ID: 0986
 */
exports.searchTool_0986 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0986:', error);
    throw error;
  }
};
