/**
 * Generated Tool: searchTool_0722
 * Domain: Search
 * ID: 0722
 */
exports.searchTool_0722 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0722:', error);
    throw error;
  }
};
