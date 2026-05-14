/**
 * Generated Tool: searchTool_0977
 * Domain: Search
 * ID: 0977
 */
exports.searchTool_0977 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0977:', error);
    throw error;
  }
};
