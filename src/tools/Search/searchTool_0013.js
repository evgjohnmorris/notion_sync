/**
 * Generated Tool: searchTool_0013
 * Domain: Search
 * ID: 0013
 */
exports.searchTool_0013 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0013:', error);
    throw error;
  }
};
