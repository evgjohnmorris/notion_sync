/**
 * Generated Tool: searchTool_0003
 * Domain: Search
 * ID: 0003
 */
exports.searchTool_0003 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0003:', error);
    throw error;
  }
};
