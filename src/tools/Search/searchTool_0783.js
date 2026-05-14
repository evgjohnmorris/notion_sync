/**
 * Generated Tool: searchTool_0783
 * Domain: Search
 * ID: 0783
 */
exports.searchTool_0783 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0783:', error);
    throw error;
  }
};
