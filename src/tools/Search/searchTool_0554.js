/**
 * Generated Tool: searchTool_0554
 * Domain: Search
 * ID: 0554
 */
exports.searchTool_0554 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0554:', error);
    throw error;
  }
};
