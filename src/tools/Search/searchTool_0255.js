/**
 * Generated Tool: searchTool_0255
 * Domain: Search
 * ID: 0255
 */
exports.searchTool_0255 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0255:', error);
    throw error;
  }
};
