/**
 * Generated Tool: searchTool_0134
 * Domain: Search
 * ID: 0134
 */
exports.searchTool_0134 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0134:', error);
    throw error;
  }
};
