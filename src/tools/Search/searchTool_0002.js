/**
 * Generated Tool: searchTool_0002
 * Domain: Search
 * ID: 0002
 */
exports.searchTool_0002 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0002:', error);
    throw error;
  }
};
