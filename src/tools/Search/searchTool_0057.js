/**
 * Generated Tool: searchTool_0057
 * Domain: Search
 * ID: 0057
 */
exports.searchTool_0057 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0057:', error);
    throw error;
  }
};
