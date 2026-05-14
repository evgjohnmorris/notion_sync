/**
 * Generated Tool: searchTool_0858
 * Domain: Search
 * ID: 0858
 */
exports.searchTool_0858 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0858:', error);
    throw error;
  }
};
