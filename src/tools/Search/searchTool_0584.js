/**
 * Generated Tool: searchTool_0584
 * Domain: Search
 * ID: 0584
 */
exports.searchTool_0584 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0584:', error);
    throw error;
  }
};
